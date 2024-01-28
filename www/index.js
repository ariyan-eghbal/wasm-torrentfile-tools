require('bootstrap');
import { process_file, humanize_size, timestamp_to_string } from 'wasm-torrentfile-tools';
import Mustache from 'mustache';

let template = `
    <div>
        <table>
            <tbody>
                <tr><th>General Info</th></tr>
                <tr><td>Name</td><td>{{file_data.info.name}}</td></tr>
                <tr><td>Type</td><td>{{#extra.is_single}}Single File{{/extra.is_single}}{{^extra.is_single}}Multiple Files{{/extra.is_single}}</td></tr>
                <tr><td>Privacy</td><td>{{#file_data.info.private}}Private Torrent{{/file_data.info.private}}{{^file_data.info.private}}Public Torrent{{/file_data.info.private}}</td></tr>
                <tr><td>Info hash (MD5)</td><td>{{extra.info_hash.md5}}</td></tr>
                <tr><td>Info hash (SHA1)</td><td>{{extra.info_hash.sha1}}</td></tr>
                <tr><td>Encoding</td><td><p>{{file_data.encoding}}</p></td></tr>
                <tr><td>Create Date</td><td>{{{file_data.creation_date_hr}}}</td></tr>
                <tr><td>Created By</td><td>{{{file_data.created by}}}</td></tr>
                <tr><td>Comment</td><td><p>{{file_data.comment}}</p></td></tr>
                <tr><td>Stored MD5 Sum</td><td>{{file_data.info.md5sum}}</td></tr>
                <tr><td>Total Size</td><td>{{ extra.total_size }} ({{extra.total_size_hr}})</td></tr>
                <tr><td>Files Count</td><td>{{ extra.files_count }}</td></tr>
                <tr><td>Piece Length</td><td>{{{ file_data.info.piece length }}} ({{{ file_data.info.piece_length_hr }}})</td></tr>
                <tr><td>Piece Count</td><td>{{{ extra.pieces_count }}}</td></tr>
                <tr><td>Merkle Root</td><td>{{{ file_data.info.root hash }}}</td></tr>
                <tr><th>Trackers</th></tr>
                <tr><td>Main</td><td>{{{ file_data.announce }}}</td></tr>
                <tr><td>Alternatives</td><td>
                    <ul>
                    {{#file_data.announce-list}}
                    <li>{{.}}</li>
                    {{/file_data.announce-list}}
                    </ul>
                </td></tr>
                {{#file_data.httpseeds}}
                <tr><th>HTTP Seeds</th></tr><td>
                    <ul>
                    {{#file_data.httpseeds}}
                    <li>{{.}}</li>
                    {{/file_data.httpseeds}}
                    </ul>
                </td></tr>
                {{/file_data.httpseeds}}
            </tbody>
        </table>
    </div>
`


async function run() {

    const fileInput = document.getElementById('file-input');
    fileInput.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = async () => {
            const result = await process_file(fileReader);
            let o = JSON.parse(result);
            o.extra.total_size_hr = humanize_size(o.extra.total_size);
            o.file_data.info.piece_length_hr = humanize_size(o.file_data.info['piece length']);
            o.file_data.creation_date_hr = timestamp_to_string(BigInt(o.file_data['creation date']));
            window.console.log(o);

            var output = Mustache.render(template, o);
            document.getElementById('result').innerHTML = output;

        };

        fileReader.readAsArrayBuffer(file);
    });
}

run();

// wasm.greet();
