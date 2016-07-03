'use strict';

angular.module('mock', ['ngMockE2E'])
    .run(function ($httpBackend, $filter, $log) {

        var booksLibrary = [
            {
                "id": 1,
                "image": "/images/covers/01.gif",
                "title": "You Don't Know JS: Up & Going",
                "author": "Kyle Simpson",
                "summary": "It's easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you're new to the language or have used it for years. With the \"You Don't Know JS\" book series, you'll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced...",
                "year": 2015,
                "book_rating": 4.8,
                "author_rating": 4
            },
            {
                "id": 2,
                "image": "/images/covers/02.gif",
                "title": "Learning Node, 2nd Edition",
                "author": "Shelley Powers",
                "summary": "Take your web development skills from browser to server with Node—and learn how to write fast, highly scalable network applications on this JavaScript-based platform. Updated for the latest Node Long Term Support (LTS) and Node Current (6.0) releases, this hands-on edition helps you master Node's core fundamentals and gain...",
                "year": 2016,
                "book_rating": 4.6,
                "author_rating": 2.8
            },
            {
                "id": 3,
                "image": "/images/covers/03.gif",
                "title": "You Don't Know JS: ES6 & Beyond",
                "author": "Kyle Simpson",
                "summary": "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. As part of the  Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
                "year": 2015,
                "book_rating": 4.0,
                "author_rating": 4
            },
            {
                "id": 4,
                "image": "/images/covers/04.gif",
                "title": "You Don't Know JS: Async & Performance",
                "author": "Kyle Simpson",
                "summary": "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. As part of the 't Know JS series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated",
                "year": 2015,
                "book_rating": 4.3,
                "author_rating": 4
            },
            {
                "id": 5,
                "image": "/images/covers/05.gif",
                "title": "You Don't Know JS: Scope & Closures",
                "author": "Kyle Simpson",
                "summary": "Ebook: $15.99, Print & Ebook: $19.79, Print: $17.99",
                "year": 2014,
                "book_rating": 4.4,
                "author_rating": 4
            },
            {
                "id": 6,
                "image": "/images/covers/06.gif",
                "title": "You Don't Know JS: Types & Grammar",
                "author": "Kyle Simpson",
                "year": 2015,
                "summary": "Ebook: $18.99, Print & Ebook: $24.19, Print: $21.99",
                "book_rating": 5.0,
                "author_rating": 4
            },
            {
                "id": 7,
                "image": "/images/covers/07.gif",
                "title": "You Don't Know JS: this & Object Prototypes",
                "author": "Kyle Simpson",
                "summary": "No matter how much experience you have with JavaScript, odds are you don't fully understand the language. This concise, in-depth guide takes you inside JavaScript's this structure and object prototypes. You'll learn how they work and why they're integral to behavior delegation",
                "year": 2014,
                "book_rating": 4.7,
                "author_rating": 4
            },
            {
                "id": 8,
                "image": "/images/covers/08.gif",
                "title": "Learning React Native",
                "author": "Bonnie Eisenman",
                "summary": "Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you'll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You'll also discover how to access...",
                "year": 2015,
                "book_rating": 4.7,
                "author_rating": 3.9
            },
            {
                "id": 9,
                "image": "/images/covers/09.gif",
                "title": "Learning JavaScript, 3rd Edition",
                "author": "Ethan Brown",
                "summary": "This is an exciting time to learn JavaScript. Now that the latest JavaScript specification—ECMAScript 6.0 (ES6)—has been finalized, learning how to develop high-quality applications with this language is easier and more satisfying than ever. This practical book takes programmers (amateurs and pros alike) on a no-nonsense tour...",
                "year": 2016,
                "book_rating": 4.0,
                "author_rating": 4.1
            },
            {
                "id": 10,
                "image": "/images/covers/10.gif",
                "title": "JavaScript: The Good Parts",
                "author": "Douglas Crockford",
                "summary": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the...",
                "year": 2008,
                "book_rating": 4.2,
                "author_rating": 4.4
            },
            {
                "id": 11,
                "image": "/images/covers/11.gif",
                "title": "Data Visualization with Python and JavaScript",
                "author": "Kyran Dale",
                "summary": "With Early Release ebooks, you get books in their earliest form—the author's raw and unedited content as he or she writes—so you can take advantage of these technologies long before the official release of these titles. You'll also receive updates when significant changes are made, new chapters are available, and the final...",
                "year": 2016,
                "book_rating": 5.0,
                "author_rating": 4.6
            },
            {
                "id": 12,
                "image": "/images/covers/12.gif",
                "title": "JavaScript: The Definitive Guide, 6th Edition",
                "author": "David Flanagan",
                "summary": "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.",
                "year": 2011,
                "book_rating": 4.5,
                "author_rating": 3.8
            },
            {
                "id": 13,
                "image": "/images/covers/13.gif",
                "title": "Programming JavaScript Applications",
                "author": "Eric Elliott",
                "summary": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier—yes, easier—to work with as your...",
                "year": 2014,
                "book_rating": 4.8,
                "author_rating": 4.3
            },
            {
                "id": 14,
                "image": "/images/covers/14.gif",
                "title": "Head First JavaScript Programming",
                "author": "Eric T. Freeman, Elisabeth Robson",
                "summary": "This brain-friendly guide teaches you everything from JavaScript language fundamentals to advanced topics, including objects, functions, and the browser's document object model. You won't just be reading—you'll be playing games, solving puzzles, pondering mysteries, and interacting with...",
                "year": 2014,
                "book_rating": 4.7,
                "author_rating": 4.0
            },
            {
                "id": 15,
                "image": "/images/covers/15.gif",
                "title": "What Is Node?",
                "author": "Brett McLaughlin",
                "summary": "Node.js. It's the latest in a long line of “Are you cool enough to use me?” programming languages, APIs, and toolkits. In that sense, it lands squarely in the tradition of Rails, and Ajax, and Hadoop, and even to some degree iPhone programming and HTML5.",
                "year": 2011,
                "book_rating": 3.8,
                "author_rating": 3.6
            },
            {
                "id": 16,
                "image": "/images/covers/16.gif",
                "title": "AngularJS: Up and Running",
                "author": "Brad Green",
                "summary": "If you want to get started with AngularJS, either as a side project, an additional tool, or for your main work, this practical guide teaches you how to use this meta-framework step-by-step, from the basics to advanced concepts. By the end of the book, you'll understand how to develop a large, maintainable, and performant...",
                "year": 2014,
                "book_rating": 4.5,
                "author_rating": 4.1
            },
            {
                "id": 17,
                "image": "/images/covers/17.gif",
                "title": "Mastering Backbone.js",
                "author": "Abiee Echamea",
                "summary": "Design and build scalable web applications using Backbone.js",
                "year": 2016,
                "book_rating": 4.0,
                "author_rating": 4.2
            },
            {
                "id": 18,
                "image": "/images/covers/18.gif",
                "title": "JavaScript with Promises",
                "author": "Daniel Parker",
                "summary": "Asynchronous JavaScript is everywhere, whether you're using Ajax, AngularJS, Node.js, or WebRTC. This practical guide shows intermediate to advanced JavaScript developers how Promises can help you manage asynchronous code effectively—including the inevitable flood of callbacks as your codebase grows. You'll learn the inner...",
                "year": 2015,
                "book_rating": 5.0,
                "author_rating": 4.8
            },
            {
                "id": 19,
                "image": "/images/covers/19.gif",
                "title": "Getting Started with p5.js",
                "author": "Lauren McCarthy",
                "summary": "With p5.js, you can think of your entire Web browser as your canvas for sketching with code!",
                "year": 2015,
                "book_rating": 3.0,
                "author_rating": 3.6
            },
            {
                "id": 20,
                "image": "/images/covers/20.gif",
                "title": "Developing an Electron Edge",
                "author": "Adam Lynch",
                "summary": "Developing an Electron Edge is for anyone looking to keep up with the cutting edge of desktop application development. If you have ever wanted to create a cross-platform desktop app and put your Web app on users' desktops, you will love this book. If you're a Web developer or a Node.js user, you'll be pleasantly surprised by...",
                "year": 2016,
                "book_rating": 1.0,
                "author_rating": 1.0
            },
            {
                "id": 21,
                "image": "/images/covers/21.gif",
                "title": "JavaScript Cookbook, 2nd Edition",
                "author": "Shelley Powers",
                "summary": "Problem solving with JavaScript is a lot trickier now that its use has expanded considerably in size, scope, and complexity. This cookbook has your back, with recipes for common tasks across the JavaScript world, whether you're working in the browser, the server, or a mobile environment. Each recipe includes reusable code and...",
                "year": 2015,
                "book_rating": 4.2,
                "author_rating": 2.8
            },
            {
                "id": 22,
                "image": "/images/covers/22.gif",
                "title": "Learning JavaScript Design Patterns",
                "author": "Addy Osmani",
                "summary": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
                "year": 2012,
                "book_rating": 4.6,
                "author_rating": 3.7
            },
            {
                "id": 23,
                "image": "/images/covers/23.gif",
                "title": "JavaScript & jQuery: The Missing Manual, 3rd Edition",
                "author": "David Sawyer McFarland",
                "summary": "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn. This easy-to-read guide not only covers JavaScript basics, but also shows you how to save time and effort with the jQuery and jQuery UI libraries of prewritten JavaScript code....",
                "year": 2014,
                "book_rating": 3.8,
                "author_rating": 4.3
            },
            {
                "id": 24,
                "image": "/images/covers/24.gif",
                "title": "WebSocket",
                "author": "Andrew Lombardi",
                "summary": "Until recently, creating desktop-like applications in the browser meant using inefficient Ajax or Comet technologies to communicate with the server. With this practical guide, you'll learn how to use WebSocket, a protocol that enables the client and server to communicate with each other on a single connection",
                "year": 2015,
                "book_rating": 4.5,
                "author_rating": 3.7
            },
            {
                "id": 25,
                "image": "/images/covers/25.gif",
                "title": "KnockoutJS Blueprints",
                "author": "Carlo Russo",
                "summary": "KnockoutJS is a JavaScript library that provides you with a sophisticated way of communicating between your UI and the underlying data model to create rich and desktop-like web UIs.",
                "year": 2015,
                "book_rating": 4.0,
                "author_rating": 3.9
            },
            {
                "id": 26,
                "image": "/images/covers/26.gif",
                "title": "Are Your Bits Flipped?",
                "author": "Joe Kissell",
                "summary": "Just as a single flipped bit in a piece of computer code can bring an otherwise reliable app crashing to a halt, a single misconception in your understanding of personal computing technology can cause all manner of problems -- including lost data, wasted time, and constant frustration as you live..",
                "year": 2016,
                "book_rating": 3.7,
                "author_rating": 4.5
            },
            {
                "id": 27,
                "image": "/images/covers/27.gif",
                "title": "React: Up & Running",
                "author": "Stoyan Stefanov",
                "summary": "With Early Release ebooks, you get books in their earliest form—the author's raw and unedited content as he or she writes—so you can take advantage of these technologies long before the official release of these titles. You'll also receive updates when significant changes are made, new chapters are available, and the final.",
                "year": 2015,
                "book_rating": 5.0,
                "author_rating": 4.9
            },
            {
                "id": 28,
                "image": "/images/covers/28.gif",
                "title": "Functional JavaScript",
                "author": "Michael Fogus",
                "summary": "How can you overcome JavaScript language oddities and unsafe features? With this book, you'll learn how to create code that's beautiful, safe, and simple to understand and test by using JavaScript's functional programming support. author Michael Fogus shows you how to apply functional-style concepts with Underscore.js",
                "year": 2013,
                "book_rating": 4.2,
                "author_rating": 3.5
            },
            {
                "id": 29,
                "image": "/images/covers/29.gif",
                "title": "Going GAS",
                "author": "Bruce Mcpherson",
                "summary": "Whether you're moving from Microsoft Office to Google Docs or simply want to learn how to automate Docs with Google Apps Script, this practical guide shows you by example how to work with each of the major Apps Script services.",
                "year": 2016,
                "book_rating": 4.0,
                "author_rating": 4.6
            },
            {
                "id": 30,
                "image": "/images/covers/30.gif",
                "title": "Ajax on Java",
                "author": "Steven Douglas Olson",
                "summary": "This practical guide shows you how to make your Java web applications more responsive and dynamic by incorporating new Ajaxian features, including suggestion lists, drag-and-drop, and more. Java developers can choose between many different ways of incorporating Ajax, from building JavaScript into your applications ",
                "year": 2007,
                "book_rating": 2.9,
                "author_rating": 3.2
            }
        ];


        $httpBackend.whenRoute('GET', '/api/book/:id').respond(function (method, url, data, headers, params) {
            var response = angular.copy(booksLibrary[params.id]);
            $log.debug('/api/book/:id', params, response);
            return [200, response];
        });

        $httpBackend.whenRoute('GET', '/api/book').respond(function (method, url, data, headers, params) {
            var response = angular.copy(booksLibrary);

            if (Object.keys(params).length > 0) {
                response = $filter('filter')(response, {$: params.query});
            }
            response = $filter('orderBy')(response, params['orderBy'] || 'book_rating', true);
            response = response.slice(0, params.limitTo);
            $log.debug('/api/book/', params, response);
            return [200, response];
        });

        $httpBackend.whenRoute('GET', '/api/author').respond(function (method, url, data, headers, params) {
            var ordered, authors = {}, response = [];

            ordered = $filter('orderBy')(booksLibrary, params['orderBy'] || 'author_rating', true);

            ordered.forEach(function (book) {
                if (!authors[book.author]) {
                    response.push(book.author);
                }
                authors[book.author] = true;
            });

            response = response.slice(0, params.limitTo);
            $log.debug('/api/author/ ', response);
            return [200, response];
        });

        $httpBackend.whenPOST('/api/book').respond(function (method, url, data, headers, params) {
            data = angular.fromJson(data);
            angular.merge(data, {book_rating: 5, author_rating: 5});
            booksLibrary.push(angular.fromJson(data));
            return [200, data];
        });

        $httpBackend.whenGET(/.*\.html/).passThrough();
    });