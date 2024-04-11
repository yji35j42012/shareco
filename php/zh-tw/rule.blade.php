<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Shareco-商標及應用準則">
    <meta name="keywords" content="Shareco">
    <meta name="image" property="og:image" content="../images/shareco_seo.jpg">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/all.min.css">
    <title>SHARECO-商標及應用準則</title>
</head>

<body>
    <div class="wrap">
        @yield('header')
        <section class="banner _bg _rule" style="background-image: url('../images/contact/banner.png');">
            <div class="banner_txt">
                <h1>商標及應用準則</h1>
                <div class="banner_txt_rule fz26pxto16">下方為SHARECO的標誌使用方針，你可以下載所有標誌素材進行運用。
                    使用標誌素材，表示你同意遵守SHARECO商標使用規範。
                    請了解SHARECO有權利在任一時間重新評估標誌素材的使用方式，
                    並保留可終止或修改「標誌使用權限」的權利。
                </div>
                <a class="border_btn _bottom_arr" href="../images/rule/SHARECO＿商標下載檔.zip" download="SHARECO＿商標下載檔.zip">下載所有標誌素材</a>
            </div>
        </section>
        <section class="rule">
            <div class="container">
                <ul class="rule_group">
                    <li class="rule_title">SHARECO黑體標誌</li>
                    <li class="rule_item">
                        <div class="rule_item_txt">淺色背景用</div>
                        <div class="rule_item_pic">
                            <img src="../images/rule/background_light.png" alt="SHARECO黑體標誌 淺色背景用">
                        </div>
                    </li>
                    <li class="rule_item">
                        <div class="rule_item_txt">深色背景用 (全字反白)</div>
                        <div class="rule_item_pic">
                            <img src="../images/rule/background_dark.png" alt="SHARECO黑體標誌 深色背景用">
                        </div>
                    </li>
                    <li class="rule_title">SHARECO襯線體標誌</li>
                    <li class="rule_item">
                        <div class="rule_item_txt">淺色背景用</div>
                        <div class="rule_item_pic">
                            <img src="../images/rule/font_light.png" alt="SHARECO襯線體標誌 淺色背景用">
                        </div>
                    </li>
                    <li class="rule_item">
                        <div class="rule_item_txt">深色背景用 (全字反白)</div>
                        <div class="rule_item_pic">
                            <img src="../images/rule/font_dark.png" alt="SHARECO襯線體標誌 深色背景用">
                        </div>
                    </li>
                </ul>
                <ul class="rule_group _color">
                    <li class="rule_title">標誌顏色</li>
                    <li class="rule_item _color" data-name="Black" data-cmyk="C0 M0 Y0 K100">
                        #000000
                    </li>
                    <li class="rule_item _color" data-name="White" data-cmyk="C0 M0 Y0 K0">
                        #FFFFFF
                    </li>
                </ul>
                <ul class="rule_group">
                    <li class="rule_title">淨空範圍</li>
                    <li class="rule_area">
                        <img src="../images/rule/logo_rule_1.png" alt="淨空範圍">
                    </li>
                    <li class="rule_area">
                        <img src="../images/rule/logo_rule_2.png" alt="淨空範圍">
                    </li>
                </ul>

            </div>
        </section>
        <footer id="footer" class="footer">
            @include($footer)
        </footer>
    </div>


    <script src="../js/module.js"></script>
</body>

</html>
