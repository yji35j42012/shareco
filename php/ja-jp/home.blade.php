<!DOCTYPE html>
<html lang="en" class="ph">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Shareco">
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
    <link rel="stylesheet" href="{{ asset('/css/reset.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/all.min.css') }}">
    <title>SHARECO</title>
</head>

<body>
    <div id="wrap" class="wrap _home">

        @yield('header')

        <div id="home" class="home">
            <div class="home_bg room"></div>
            <div id="tree_scene" class="home_tree room">
                <img data-depth="0.5" src="../images/home/treel_ph.webp" alt="SHARECO">
            </div>
            <div id="lion_scene" class="home_lion room">
                <img id="lion_img" data-depth="0.5" src="../images/home/lion_ph.png" alt="SHARECO">
            </div>
            <div id="straw_scene" class="home_straw room">
                <img data-depth="2.5" id="straw_img1" src="../images/home/straw_ph.webp" alt="SHARECO">
            </div>
            <div id="grass_scene" class="home_grass room">
                <img data-depth="0.5" src="../images/home/grass_ph.webp" alt="SHARECO">
            </div>
            <div id="plant_scene" class="home_plant room">
                <img data-depth="0.5" src="../images/home/plant_ph.webp" alt="SHARECO">
            </div>
            <div id="bird_scene" class="home_bird room">
                <img data-depth="4" src="../images/home/bird.png" alt="SHARECO">
            </div>
            <div id="flyl_scene" class="home_flyl room">
                <img data-depth="3" src="../images/home/flyl.png" alt="SHARECO">
            </div>
            <div id="flyr_scene" class="home_flyr room">
                <img data-depth="0.5" src="../images/home/flyr.png" alt="SHARECO">
            </div>
            <div class="home_logo room">
                <img src="../images/home/logo.svg" alt="SHARECO">
            </div>
            <div class="home_linear room"></div>
            <div id="txt_scene" class="home_txt room">
                <span data-depth="0.2" class="home_txt_box">
                    <div class="home_txt_title">
                        Desire · Addiction
                    </div>
                    <div class="home_txt_since">since 2016</div>
                    <button id="home_btn" class="home_txt_btn d_none">Enter</button>
                </span>
            </div>
        </div>
        <div id="home_outside" class="home_outside">
            <div id="home_scroll" class="home_scroll">
                <div id="home_second" class="home_video">
                    <div id="sec_box" class="home_video_box">
                        <div id="player"></div>
                        <button id="home_video1Handler1" class="home_video_sound _quiet"></button>
                    </div>
                </div>
                <div id="home_third" class="home_third">
                    <div class="home_third_box">
                        <div id="home_third_liner" class="home_third_liner"></div>
                    </div>
                </div>
                <div id="home_forth" class="home_forth">
                    <div class="home_forth_liner"></div>
                    <div class="home_forth_box">
                        <div id="forthBox" class="home_forth_txtBox">
                            <div id="forthBg" class="linear"></div>
                            <div id="forthTxt" class="txt">
                                私たちは生活に、秩序と安心感を求めていると同時に、規則が破られ、 <br>
                                状況が制御不能になることも密かに期待しています。
                            </div>
                        </div>
                    </div>
                    <div id="forth_cat" class="home_forth_cat"></div>
                </div>
                <div id="home_fifth" class="home_fifth">
                    <div id="home_fifth_box1" class="home_fifth_box1" style="--fifbg:1.1">
                        <div class="home_fifth_bg1">
                            <img id="fifth_pc_g1" class="top pc" src="" alt="">
                            <img id="fifth_pc_g2" class="bottom pc" src="" alt="">
                            <img id="fifth_ph_g1" class="top ph" src="" alt="">
                            <img id="fifth_ph_g2" class="bottom ph" src="" alt="">
                        </div>
                        <div class="home_fifth_animal">
                            <img id="fif_bird" src="../images/home/fifth_bird.png" alt="">
                            <img id="fif_bee1" src="../images/home/fifth_bee1.png" alt="">
                            <img id="fif_bee2" src="../images/home/fifth_bee2.png" alt="">
                            <img id="fif_bee3" src="../images/home/fifth_bee1.png" alt="">
                            <span id="fifth_txt" class="txt">Attraction is not a choice</span>
                        </div>
                    </div>
                    <div id="home_fifth_box2" class="home_fifth_box2">
                        <video id="fifth_video" class="pc" width="100%" height="100%" muted loop autoplay
                            src="" style="display: none;"></video>
                        <span id="fifth_video_ph" class="home_fifth_ph ph">
                            <video id="fifth_video_m" width="100%" height="100%" muted loop autoplay
                                src="../images/home/mobile_smoke_video.mp4" playsinline
                                style="display: none;"></video>
                        </span>
                        <span id="fifth_video_lin" class="home_fifth_lin" style="display: none"></span>
                        <img id="fifBg3" class="home_fifth_bg3" src="" alt="">
                        <div id="fiftxt2" class="home_fifth_txt">
                            ネガティブな面も、他ならぬ私たちの一部です。抑圧されるほどに、表現したいという欲求も高まります。
                        </div>
                        <div id="fifbee4" class="home_fifth_bee pc">
                            <img src="../images/home/flyl.png" alt="">
                        </div>
                    </div>
                </div>
                <div id="home_six" class="home_six">
                    <div class="home_six_box">
                        <div class="home_six_bg">
                            <span id="six_bg1">
                                <img id="six_img" src="" alt="">
                            </span>
                            <span id="six_bg2"><img src="../images/home/sixBg2_ph.webp" alt=""></span>
                        </div>
                        <div id="six_lin" class="home_six_lin"></div>
                        <div id="six_txt" class="home_six_txt">
                            <span>
                                香りは情報を伝えるメッセージです。<br>
                                私たちのコンセプトは、すべての香水を通じて、<br>
                                魅力的で忘れられない思い出を創り出すことです。
                            </span>
                        </div>
                    </div>
                </div>
                <div id="home_seven" class="home_seven">
                    <div id="sev_lin" class="home_seven_lin"></div>
                    <div class="home_seven_box">
                        <div id="sev_bg" class="home_seven_bg"></div>
                        <div id="sev_txt" class="home_seven_txt d_none">
                            <a class="border_btn _back" href="{{ route('story') }}">ブランドストーリー</a>
                        </div>
                        <footer id="sev_footer" class="footer d_none">
                            @include($footer)
                        </footer>
                    </div>
                </div>
                <div id="home_txtBox" class="home_txtBox">
                    <div id="home_third_txt1" class="home_third_txt">私たちは成長の中で、<br>ときに戸惑い、</div>
                    <div id="home_third_txt2" class="home_third_txt _right">この世界で自分がどう生きたらいい<br>のか疑問に思うことがあります。</div>
                </div>

            </div>
        </div>
        <div id="fake_h" class="home_fake_H"></div>
        <div id="sev_txt_ph" class="home_seven_txt _ph d_none">
            <a class="border_btn _back" href="{{ route('story') }}">ブランドストーリー</a>
		</div>
		<footer id="sev_footer_ph" class="footer d_none">
            @include($footer)
		</footer>
    </div>
    <script src="{{ asset('/js/pallax.js') }}"></script>
    <script src="{{ asset('/js/module.js') }}"></script>
    <script src="{{ asset('/js/home.js') }}"></script>
</body>

</html>
