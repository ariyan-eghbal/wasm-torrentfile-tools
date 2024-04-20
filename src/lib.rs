// #[macro_use]
// extern crate serde_derive;

extern crate web_sys;

mod utils;

use chrono::{DateTime, NaiveDateTime, Utc};
use libdottorrent::*;
use serde_json::json;
use wasm_bindgen::prelude::*;
use web_sys::{js_sys::Uint8Array, FileReader};

#[allow(unused_macros)]
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
pub fn humanize_size(size: usize) -> JsValue {
    JsValue::from_str(human_bytes::human_bytes(size as f64).as_str())
}

#[wasm_bindgen]
pub fn timestamp_to_string(timestamp: i64) -> JsValue {
    let datetime = NaiveDateTime::from_timestamp_opt(timestamp, 0).unwrap();
    let datetime = DateTime::<Utc>::from_naive_utc_and_offset(datetime, Utc);
    let datetime = datetime.format("%Y-%m-%d %H:%M:%S");
    JsValue::from_str(datetime.to_string().as_str())
}

#[wasm_bindgen]
pub fn process_file(file_reader: FileReader) -> JsValue {
    utils::set_panic_hook();

    let file_result = file_reader.result().unwrap();
    let file_result = Uint8Array::new(&file_result);
    let file_result = file_result.to_vec();
    match Torrent::from_bytes(&file_result) {
        Ok(t) => {
            // render_torrent(&t);
            // format!("{:?}", t.info.name)
            // println!("{}", t.info);
            // let serialized = serde_json::to_string(&t).unwrap();
            // log!("MD5: {:?}", t.md5());
            // log!("SHA1: {:?}", t.sha1());
            let out = json!({"file_data": &t,
                "extra": {"total_size": t.size().unwrap(),
                          "info_hash": {
                             "md5": t.md5(),
                             "sha1": t.sha1(),
                         },
                         "is_single": t.is_single(),
                         "files_count": t.files_count().unwrap(),
                         "pieces_count": t.pieces_count()
            }});
            // log!("{:?}", out);
            JsValue::from_str(out.to_string().as_str())
        }
        Err(_e) => JsValue::UNDEFINED,
    }
}

fn _check_trackers() {
    let window = web_sys::window().expect("no global `window` exists");
    let document = window.document().expect("should have a document on window");
    let _body = document.body().expect("document should have a body");

    // Manufacture the element we're gonna append
    // let val = document.create_element("p").unwrap();
    // val.set_text_content(Some(&t.info.name));

    // body.append_child(&val).unwrap();
}

//fn _render_torrent(torrent: &Torrent) {
//    println!("name:\t\t{}", torrent.info.name);
//    println!("announce:\t{:?}", torrent.announce);
//    if let Some(ans_list) = &torrent.announce_list {
//        println!("announce list:\n");
//        ans_list.iter().for_each(|item| {
//            println!("\t-------------------------");
//            item.iter().for_each(|ans| println!("\t{}", ans))
//        });
//    }
//    if let Some(seeds) = &torrent.httpseeds {
//        println!("Http Seeds:\n");
//        seeds.iter().for_each(|item| println!("\t{}", item));
//    }
//
//    println!("nodes:\t\t{:?}", torrent.nodes);
//    if let Some(al) = &torrent.announce_list {
//        for a in al {
//            println!("announce list:\t{}", a[0]);
//        }
//    }
//    println!("httpseeds:\t{:?}", torrent.httpseeds);
//    println!("creation date:\t{:?}", torrent.creation_date);
//    println!("comment:\t{:?}", torrent.comment);
//    println!("created by:\t{:?}", torrent.created_by);
//    println!("encoding:\t{:?}", torrent.encoding);
//    println!("piece length:\t{:?}", torrent.info.piece_length);
//    println!("private:\t{:?}", torrent.info.private);
//    //println!("root hash:\t{:?}", torrent.info.root_hash);
//    println!("md5sum:\t\t{:?}", torrent.info.md5sum);
//    //println!("path:\t\t{:?}", torrent.info.path);
//    if let Some(files) = &torrent.info.files {
//        for f in files {
//            println!("file path:\t{:?}", f.path);
//            println!("file length:\t{}", f.length);
//            println!("file md5sum:\t{:?}", f.md5sum);
//        }
//    }
//}
