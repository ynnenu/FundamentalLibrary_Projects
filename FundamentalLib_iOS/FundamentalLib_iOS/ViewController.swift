//
//  ViewController.swift
//  FundamentalLibrary_iOS
//
//  Created by Vela, Eniela on 2022-12-28.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate  {

    override func viewDidLoad() {
        super.viewDidLoad()
               let url = URL(string: "http://localhost:3000/")!
//               let webHTML = loadHTMLString("<html><body><p>Hello!</p></body></html>", baseURL: nil)
               WebView.load(URLRequest(url: url))
               WebView.allowsBackForwardNavigationGestures = true
    }

  
    @IBOutlet weak var WebView: WKWebView!
    
    override func loadView() {
          WebView = WKWebView()
          WebView.navigationDelegate = self
          view = WebView
      }
}

