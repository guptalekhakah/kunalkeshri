document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       CONFIGURATION
    ========================================= */

    const TOTAL_PAGES = 26;

    const bookElement =
        document.getElementById("book");

    const currentPageElement =
        document.getElementById("currentPage");

    const totalPagesElement =
        document.getElementById("totalPages");


    totalPagesElement.textContent = TOTAL_PAGES;


    /* =========================================
       CREATE IMAGE ARRAY
       
       Expected folder structure:

       images/
          page-01.jpg
          page-02.jpg
          page-03.jpg
          ...
          page-26.jpg
    ========================================= */

    const pages = [];

    for (let i = 1; i <= TOTAL_PAGES; i++) {

        const pageNumber =
            String(i).padStart(2, "0");

        pages.push(
            `images/page-${pageNumber}.jpg`
        );

    }


    /* =========================================
       RESPONSIVE BOOK SIZE
    ========================================= */

    function getBookSettings() {

        const viewportWidth =
            window.innerWidth;

        const viewportHeight =
            window.innerHeight;


        const headerHeight =
            document
                .querySelector(".magazine-header")
                .offsetHeight;

        const counterHeight =
            document
                .querySelector(".page-status")
                .offsetHeight;


        const availableHeight =
            viewportHeight
            - headerHeight
            - counterHeight
            - 30;


        /* 
           Magazine aspect ratio
           
           Your original magazine:
           8.5 × 11 inches

           Ratio = 11 / 8.5
        */

        const aspectRatio =
            11 / 8.5;


        let pageWidth;
        let pageHeight;


        /* MOBILE */

        if (viewportWidth <= 700) {

            pageWidth =
                Math.min(
                    viewportWidth - 20,
                    availableHeight / aspectRatio
                );

            pageHeight =
                pageWidth * aspectRatio;

        }


        /* DESKTOP */

        else {

            /*
               Desktop par 2-page spread
               ke liye enough width rakha gaya hai.
            */

            pageHeight =
                Math.min(
                    availableHeight,
                    760
                );


            pageWidth =
                pageHeight / aspectRatio;


            /*
               Agar 2 pages viewport me fit nahi
               ho rahe, width ke according adjust karo
            */

            const maxPageWidth =
                (viewportWidth - 100) / 2;


            if (pageWidth > maxPageWidth) {

                pageWidth =
                    maxPageWidth;

                pageHeight =
                    pageWidth * aspectRatio;

            }

        }


        return {

            width:
                Math.max(
                    180,
                    Math.floor(pageWidth)
                ),

            height:
                Math.max(
                    250,
                    Math.floor(pageHeight)
                )

        };

    }


    /* =========================================
       INITIALIZE MAGAZINE
    ========================================= */

    let pageFlip = null;


    function createMagazine() {

        const size =
            getBookSettings();


        /*
           Remove old instance
           during resize
        */

        if (pageFlip) {

            try {

                pageFlip.destroy();

            }

            catch (error) {

                console.log(
                    "Previous magazine instance removed."
                );

            }


            /*
               destroy() root element remove kar sakta hai,
               isliye book container dobara create karenge
            */

            const wrapper =
                document.querySelector(
                    ".magazine-wrapper"
                );


            const newBook =
                document.createElement("div");


            newBook.id = "book";


            wrapper.appendChild(newBook);


            pageFlip = null;

        }


        const currentBook =
            document.getElementById("book");


        currentBook.classList.add("loading");


        /*
           StPageFlip
        */

        pageFlip =
            new St.PageFlip(
                currentBook,
                {

                    /* Base page size */

                    width:
                        size.width,

                    height:
                        size.height,


                    /*
                       Responsive stretch
                    */

                    size:
                        "stretch",


                    minWidth:
                        Math.max(
                            180,
                            Math.floor(size.width * 0.7)
                        ),

                    maxWidth:
                        size.width,


                    minHeight:
                        Math.max(
                            250,
                            Math.floor(size.height * 0.7)
                        ),

                    maxHeight:
                        size.height,


                    /*
                       Smooth realistic animation
                    */

                    flippingTime:
                        850,


                    /*
                       Realistic shadows
                    */

                    drawShadow:
                        true,


                    maxShadowOpacity:
                        0.45,


                    /*
                       First & last page
                       behave like cover
                    */

                    showCover:
                        true,


                    /*
                       Mobile portrait mode
                    */

                    usePortrait:
                        true,


                    /*
                       Mobile touch support
                    */

                    mobileScrollSupport:
                        false,


                    swipeDistance:
                        25,


                    /*
                       Mouse + Touch
                    */

                    useMouseEvents:
                        true,


                    /*
                       Click/drag page
                       naturally
                    */

                    disableFlipByClick:
                        false,


                    startPage:
                        0,


                    startZIndex:
                        10

                }
            );


        /*
           Load all 26 images
        */

        pageFlip.loadFromImages(
            pages
        );


        currentBook.classList.remove(
            "loading"
        );


        /*
           Page change event
        */

        pageFlip.on(
            "flip",
            (event) => {

                const currentPage =
                    event.data + 1;


                currentPageElement.textContent =
                    currentPage;

            }
        );

    }


    /* =========================================
       START
    ========================================= */

    createMagazine();


    /* =========================================
       RESPONSIVE RESIZE
    ========================================= */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        const currentPage =
                            pageFlip
                                ? pageFlip.getCurrentPageIndex()
                                : 0;


                        createMagazine();


                        /*
                           Resize ke baad same page
                           par wapas jao
                        */

                        setTimeout(
                            () => {

                                if (pageFlip) {

                                    pageFlip.turnToPage(
                                        currentPage
                                    );

                                }

                            },
                            100
                        );

                    },
                    250
                );

        }
    );


    /* =========================================
       KEYBOARD SUPPORT DESKTOP
    ========================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (!pageFlip) return;


            if (
                event.key === "ArrowRight"
            ) {

                pageFlip.flipNext(
                    "top"
                );

            }


            if (
                event.key === "ArrowLeft"
            ) {

                pageFlip.flipPrev(
                    "top"
                );

            }

        }
    );

});
