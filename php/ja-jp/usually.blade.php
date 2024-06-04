<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Shareco-外部リンク">
    <meta name="keywords" content="Shareco">
    <meta name="image" property="og:image" content="../images/shareco_seo.jpg">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/all.min.css">
    <title>SHARECO-外部リンク</title>
</head>

<body>
    <div class="wrap">
        @yield('header')
        <section class="banner">
            <video width="100%" height="100%" autoplay muted src="../images/gallery/video_1.mp4"></video>
        </section>
        <section class="usually">
            <a href="" class="usually_btn">ブランドストーリー</a>
            <a href="./gallery.html" class="usually_btn">ギャラリー</a>
            <a href="./product_parfums.html" class="usually_btn">PARFUMS 香水</a>
            <a href="./product_venus.html" class="usually_btn">VENUS FLYTRAP ヴィーナスフ</a>
            <label class="usually_sel">
                <span id="usually_sel_txt" class="usually_sel_txt">台湾 / Taiwan</span>
                <ul id="usually_sel_group" class="usually_sel_group">
                    <li class="usually_sel_item" name='tw' data-name="台湾">台湾 / Taiwan</li>
                    <li class="usually_sel_item" name='jp' data-name="日本">日本 / Japan</li>
                    <li class="usually_sel_item" name='hk' data-name="香港">香港 / Hongkong</li>
                    <li class="usually_sel_item" name='sg' data-name="シンガポール">シンガポール / Singapore</li>
                    <li class="usually_sel_item" name='my' data-name="東南アジア">東南アジア / Malaysia</li>
                </ul>
            </label>
            <a name="usually_area" class="usually_btn" href="./store?country=tw&content=store0"
                data-msg=" オンラインショップ">台湾</a>
            <a name="usually_area" class="usually_btn" href="./store?country=jp&content=store1"
                data-msg=" 販売拠点">台湾</a>
            <ul class="gallery_photo" data-aos="">
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_1.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_2.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_3.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_4.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_5.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_6.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_7.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_8.png" alt="SHARECO">
                </li>
                <li class="gallery_photo_item">
                    <img src="../images/gallery/photot_9.png" alt="SHARECO">
                </li>
            </ul>
        </section>
        <footer id="footer" class="footer">
            @include($footer)
        </footer>
    </div>


    <script src="../js/module.js"></script>
    <script src="../js/usually.js"></script>
    <script src="../js/aos.js"></script>
    <script>
        AOS.init();
    </script>
</body>

</html>
