<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Shareco-Store">
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
    <link rel="stylesheet" href="../css/aos.css">
    <title>SHARECO-Store</title>
</head>

<body>
    <div class="wrap">
        @yield('header')
        <section id="bannerSwiperBox" class="bannerSwiper">
            <ul id="bannerSwiper_group" class="bannerSwiper_group">
                <li class="bannerSwiper_item" style="background-image: url('../images/store/banner_1.jpg')">
                    <img src="../images/store/banner_1.jpg" alt="SHARECO store banner">
                </li>
                <li class="bannerSwiper_item" style="background-image: url('../images/store/banner_2.jpg')">
                    <img src="../images/store/banner_2.jpg" alt="SHARECO store banner">
                </li>
                <li class="bannerSwiper_item" style="background-image: url('../images/store/banner_3.jpg')">
                    <img src="../images/store/banner_3.jpg" alt="SHARECO store banner">
                </li>
                <li class="bannerSwiper_item" style="background-image: url('../images/store/banner_4.jpg')">
                    <img src="../images/store/banner_4.jpg" alt="SHARECO store banner">
                </li>
                <li class="bannerSwiper_item" style="background-image: url('../images/store/banner_5.jpg')">
                    <img src="../images/store/banner_5.jpg" alt="SHARECO store banner">
                </li>
                <li class="bannerSwiper_item" style="background-image: url('../images/store/banner_6.jpg')">
                    <img src="../images/store/banner_6.jpg" alt="SHARECO store banner">
                </li>
            </ul>
            <i id="bannerSwiper_prev" class="icon_prev">
                <svg>
                    <use xlink:href="#icon_back"></use>
                </svg>
            </i>
            <i id="bannerSwiper_next" class="icon_next">
                <svg>
                    <use xlink:href="#icon_rightarr"></use>
                </svg>
            </i>
            <ul id="bannerSwiper_dots" class="normal_dots">
                <!-- <li class="bannerSwiper_dots_item on"></li>
                <li class="bannerSwiper_dots_item"></li> -->
            </ul>
        </section>
        <section id="store" class="store">
            <div class="container">
                <label class="store_sel">
                    <span id="store_sel" class="store_sel_txt fz24to18">台湾 / Taiwan</span>
                    <ul id="store_sel_group" class="store_sel_group">
                        <li name="tw" class="store_sel_item">台湾 / Taiwan</li>
                        <li name="jp" class="store_sel_item">日本 / Japan</li>
                        <li name="hk" class="store_sel_item">香港 / Hongkong</li>
                        <li name="sg" class="store_sel_item">新加坡 / Singapore</li>
                        <li name="my" class="store_sel_item">马来西亚 / Malaysia</li>
                    </ul>
                </label>
                <ul id="store_tab" class="normal_tab">
                    <li id="normal_tab_btn" class="normal_tab_btn">
                        <a id="ph_deal" href="{{ route('cooperate') }}" class="border_btn">成为经销</a>
                    </li>
                    <li class="normal_tab_item on" name="stroe0">销售据点</li>
                    <li class="normal_tab_data" id="store_ph_data1"></li>
                    <li class="normal_tab_item" name="stroe1">线上商店</li>
                    <li class="normal_tab_data" id="store_ph_data2"></li>
                </ul>


                <div id="tw_store0" name="store_show" class="store_info" style="display: none;">
                    <div class="store_info_title">旗舰店（直营门市）</div>
                    <div class="store_grid">
                        <div class="store_grid_item">台北西门旗舰店</div>
                        <div class="store_grid_item">02 - 23820500</div>
                        <div class="store_grid_item">台北市万华区西宁南路155号1F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E8%A5%BF%E9%96%80%E6%97%97%E8%89%A6%E5%BA%97+1F/@25.0435309,121.5037091,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a99916d62edd:0x285e249a14963382!8m2!3d25.0435309!4d121.506284!16s%2Fg%2F11q3_l0j4m?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <div class="store_info_title">北区（直营门市）</div>
                    <div class="store_grid">
                        <div class="store_grid_item">台北武昌诚品门市</div>
                        <div class="store_grid_item">02 - 23757500</div>
                        <div class="store_grid_item">台北市万华区武昌街二段77号1F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E6%AD%A6%E6%98%8C%E8%AA%A0%E5%93%81%E5%BA%97+1F/@25.0451616,121.5029968,17z/data=!3m2!4b1!5s0x3442a90921303339:0x9cbb8e377b5bd4e1!4m6!3m5!1s0x3442a9b6ea744f65:0x8dd6d9718d660da5!8m2!3d25.0451616!4d121.5055717!16s%2Fg%2F11jn_zgm8m?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台北信义新天地A11</div>
                        <div class="store_grid_item">02 - 23458500</div>
                        <div class="store_grid_item">台北市信义区松寿路11号3F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E4%BF%A1%E7%BE%A9A11%E5%BA%97+3F/@25.0365446,121.564662,17z/data=!3m2!4b1!5s0x3442abba122d5721:0x4e009547ae0f297c!4m6!3m5!1s0x3442abbb58d2e399:0xc3fd965cad49f592!8m2!3d25.0365446!4d121.5672369!16s%2Fg%2F11mts4cww6?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台北新光南西门市</div>
                        <div class="store_grid_item">02 - 25817500</div>
                        <div class="store_grid_item">台北市中山区南京西路15号4F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E5%8D%97%E8%A5%BF%E5%BA%97+4F/@25.0527457,121.5181246,17z/data=!3m2!4b1!5s0x3442a9694c4bc3b3:0x6c0d4efda97f46eb!4m6!3m5!1s0x3442a9d4b0be17bb:0x13435833f5b82d1c!8m2!3d25.0527457!4d121.5206995!16s%2Fg%2F11r_n1ytkp?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <!-- 113.04.11新增 新店裕隆城 -->
					<div class="store_grid">
						<div class="store_grid_item">新店裕隆城</div>
						<div class="store_grid_item">02 - 29177500</div>
						<div class="store_grid_item">新北市新店区中兴路三段70号2F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://reurl.cc/ezXKMW">MAP</a>
						</div>
					</div>
                    <div class="store_grid">
                        <div class="store_grid_item">新北板桥大远百门市</div>
                        <div class="store_grid_item">02 - 29617500</div>
                        <div class="store_grid_item">新北市板桥区新站路28号4F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E6%9D%BF%E6%A9%8B%E5%A4%A7%E9%81%A0%E7%99%BE%E5%BA%97+4F/@25.0133485,121.4636792,17z/data=!3m2!4b1!5s0x3442a818c143c69f:0x16258e8aadde7050!4m6!3m5!1s0x3442a91b0bce4667:0x971d7a9a1c15fd41!8m2!3d25.0133485!4d121.4662541!16s%2Fg%2F11jp163cxr?entry=ttu">MAP</a>
                        </div>
                    </div>
					<!-- 113.04.11修改地址 -->
					<div class="store_grid">
						<div class="store_grid_item">中坜大江购物中心</div>
						<div class="store_grid_item">03 - 4680999 #6386</div>
						<div class="store_grid_item">桃园市中坜区中园路二段501号1F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E5%A4%A7%E6%B1%9F%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83%E5%BA%97+3F/@25.0015282,121.2236038,17z/data=!3m2!4b1!5s0x346821bd2a266653:0xb3956276714a11e5!4m6!3m5!1s0x3468216150c5b2a5:0x74596c31dfd6fc1f!8m2!3d25.0015283!4d121.2284747!16s%2Fg%2F11k05915zq?entry=ttu">MAP</a>
						</div>
					</div>
                    <div class="store_grid">
                        <div class="store_grid_item">新竹远东巨城门市</div>
                        <div class="store_grid_item">03 - 5430500</div>
                        <div class="store_grid_item">新竹市东区中央路229号3F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E5%B7%A8%E5%9F%8E%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83%E5%BA%97+3F/@24.8094861,120.9721461,17z/data=!3m1!4b1!4m6!3m5!1s0x3468350070733b41:0xbabb0c6c88b3f5e!8m2!3d24.8094861!4d120.974721!16s%2Fg%2F11lh8k_81d?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <div class="store_info_title">中区（直营门市）</div>
                    <div class="store_grid">
                        <div class="store_grid_item">台中勤美门市</div>
                        <div class="store_grid_item">04 - 23250500</div>
                        <div class="store_grid_item">台中市西区公益路68号2F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E5%8F%B0%E4%B8%AD%E5%8B%A4%E7%BE%8E%E8%AA%A0%E5%93%81%E5%BA%97+2F/@24.1512354,120.6612731,17z/data=!3m2!4b1!5s0x34693da7ea2e65ff:0x98716b37bd87af65!4m6!3m5!1s0x34693d66b871aeb1:0x2cf1278063e559a2!8m2!3d24.1512354!4d120.663848!16s%2Fg%2F11rwkyzlg4?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台中新光三越门市</div>
                        <div class="store_grid_item">04 - 22547500</div>
                        <div class="store_grid_item">台中市西屯区台湾大道三段301号5F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E4%B8%AD%E6%B8%AF%E5%BA%97+5F/@24.1647673,120.6408999,17z/data=!3m2!4b1!5s0x34693d8cb8ab5429:0x2f454b8b4bd8182f!4m6!3m5!1s0x34693d715d33a281:0x96b9d958e2df698d!8m2!3d24.1647673!4d120.6434748!16s%2Fg%2F11lskjs7sm?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <div class="store_info_title">南区（直营门市）</div>
                    <div class="store_grid">
                        <div class="store_grid_item">嘉义新光垂杨门市</div>
                        <div class="store_grid_item">05 - 2230550</div>
                        <div class="store_grid_item">嘉义市西区垂杨路726号5F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E5%9E%82%E6%A5%8A%E5%BA%97+5F/@23.4737196,120.4384317,17z/data=!3m2!4b1!5s0x346e94268353b0b3:0xf1bea1caf740e72!4m6!3m5!1s0x346e951ac0169307:0xe86f62bb4ce6f277!8m2!3d23.4737196!4d120.4410066!16s%2Fg%2F11p74st4_c?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台南新光新天地门市</div>
                        <div class="store_grid_item">06 - 3030501</div>
                        <div class="store_grid_item">台南市中西区西门路一段658号4F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E6%96%B0%E5%A4%A9%E5%9C%B0%E5%BA%97+4F/@22.9873418,120.1965377,17z/data=!3m2!4b1!5s0x346e767bf3ecf66b:0x3097d6fa8a67b1f5!4m6!3m5!1s0x346e77d9f89db26d:0xfe5fb266835228f4!8m2!3d22.9873418!4d120.1991126!16s%2Fg%2F11pv2sfm5v?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台南FOCUS门市</div>
                        <div class="store_grid_item">06 - 2200500</div>
                        <div class="store_grid_item">台南市中西区中山路166号1F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E5%8F%B0%E5%8D%97Focus%E5%BA%97+1F/@22.9955969,120.2074887,17z/data=!3m2!4b1!5s0x346e76892a1b58b3:0x7d9d18f91a2cb024!4m6!3m5!1s0x346e77c0967b4105:0xaa4e8c610d95f802!8m2!3d22.9955969!4d120.2100636!16s%2Fg%2F11p00_0z_x?entry=ttu">MAP</a>
                        </div>
                    </div>
					<!-- 113.05.10新增 高雄新堀江旗艦店-->
                    <div class="store_grid">
						<div class="store_grid_item">高雄新堀江旗舰店</div>
						<div class="store_grid_item">07 - 5508433</div>
						<div class="store_grid_item">高雄市新兴区文横二路152号</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://reurl.cc/aq1Wn9">MAP</a>
						</div>
					</div>
                    <div class="store_grid">
                        <div class="store_grid_item">高雄汉神巨蛋门市</div>
                        <div class="store_grid_item">07 - 5554500</div>
                        <div class="store_grid_item">高雄市左营区博爱二路777号4F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E6%BC%A2%E7%A5%9E%E5%B7%A8%E8%9B%8B%E5%BA%97+4F/@22.6695925,120.2974151,17z/data=!3m2!4b1!5s0x346e0508af6f275f:0x5c95d0733851cbdf!4m6!3m5!1s0x346e056fc9daab4d:0x824b9f97f953a664!8m2!3d22.6695926!4d120.302286!16s%2Fg%2F11mvmw1q1l?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">高雄梦时代门市</div>
                        <div class="store_grid_item">07 - 8137500</div>
                        <div class="store_grid_item">高雄市前镇区中华五路789号7F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/YBG.inc+%E5%A4%A2%E6%99%82%E4%BB%A3%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83%E5%BA%97+7F/@22.5947386,120.3041607,17z/data=!3m2!4b1!5s0x346e0372e920ceed:0xd1d960a592e9ab80!4m6!3m5!1s0x346e039f5aaae6b7:0x28c0c5e2d1c6e16e!8m2!3d22.5947386!4d120.3067356!16s%2Fg%2F11ll78ffr5?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <div class="store_info_title">Bonny & Read（经销门市）</div>
					<!-- 113.04.11新增 台北 京站门市 -->
					<div class="store_grid">
						<div class="store_grid_item">台北 京站门市</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">台北市大同区承德路一段1号 B1F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/U1u24QQoj1bJs9Bv8">MAP</a>
						</div>
					</div>
                    <div class="store_grid">
                        <div class="store_grid_item">台北南港CITYLINK</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">台北市南港区忠孝东路七段369号B栋2F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E5%8C%97%E5%8D%97%E6%B8%AFCITYLINK%E6%AB%83%E4%BD%8D/@25.0525582,121.6019431,17z/data=!3m2!4b1!5s0x3442ab6760ef6ba7:0xca513c3eeb99856a!4m6!3m5!1s0x3442ab6443141983:0x1fbdbc7e35d983ed!8m2!3d25.0525582!4d121.604518!16s%2Fg%2F11lllg6y_s?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">中和环球购物中心</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">新北市中和区中山路三段122号2F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E6%96%B0%E5%8C%97%E4%B8%AD%E5%92%8C%E7%92%B0%E7%90%83%E9%96%80%E5%B8%82/@25.0061984,121.472539,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a964c39a1dc5:0x634d9e7f1768778c!8m2!3d25.0061984!4d121.4751139!16s%2Fg%2F11hf4rcy4g?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">新北宏汇广场</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">新北市新庄区新北大道四段3号3F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E6%96%B0%E5%8C%97%E5%AE%8F%E5%8C%AF%E5%BB%A3%E5%A0%B4%E9%96%80%E5%B8%82/@25.0597609,121.4469494,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a9b53ec384f5:0x3365ad5c73467ee9!8m2!3d25.0597609!4d121.4495243!16s%2Fg%2F11m2c2m3zf?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">新北树林秀泰</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">新北市树林区树新路40-6号2F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny%26Read%E9%A3%BE%E5%93%81+%E6%96%B0%E5%8C%97%E6%A8%B9%E6%9E%97%E7%A7%80%E6%B3%B0%E6%AB%83%E4%BD%8D/@24.9955095,121.4257911,17z/data=!3m1!4b1!4m6!3m5!1s0x34681dd5fefef6a1:0xd7a6e2d40c32bf28!8m2!3d24.9955095!4d121.428366!16s%2Fg%2F11p5j73nlj?entry=ttu">MAP</a>
                        </div>
                    </div>
					<!-- 113.04.11新增 桃园新光影城店 -->
					<div class="store_grid">
						<div class="store_grid_item">桃园新光影城店</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">桃园市中坜区春德路107号 1F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/BGEwC4jrVc1cS4Dc6">MAP</a>
						</div>
					</div>
                    <div class="store_grid">
                        <div class="store_grid_item">桃园台茂购物中心</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">桃园市芦竹区南崁路一段112号B2F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E6%A1%83%E5%9C%92%E5%8F%B0%E8%8C%82%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83%E6%AB%83%E4%BD%8D/@25.0530591,121.2853061,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a158686285fb:0x8cae521ac5f7c614!8m2!3d25.0530591!4d121.287881!16s%2Fg%2F11kx5w6q89?entry=ttu">MAP</a>
                        </div>
                    </div>
					<!-- 113.04.11新增 新竹 远东百货店 -->
					<div class="store_grid">
						<div class="store_grid_item">新竹 远东百货店</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">新竹县竹北市庄敬北路18号 3F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/q1Qax2tdck4YMRhBA">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 新竹 大鲁阁湳雅店 -->
					<div class="store_grid">
						<div class="store_grid_item">新竹 大鲁阁湳雅店</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">新竹市北区大雅路88号 1F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/Kb4i4U4d2v1EFQC18">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 台中 诚品480门市 -->
					<div class="store_grid">
						<div class="store_grid_item">台中 诚品480门市</div>
						<div class="store_grid_item">04-22516898</div>
						<div class="store_grid_item">台中市西屯区市政路480号 3F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/m845EuoM552U3tmw5">MAP</a>
						</div>
					</div>
                    <div class="store_grid">
                        <div class="store_grid_item">台中大鲁阁新时代</div>
                        <div class="store_grid_item">04-22221261</div>
                        <div class="store_grid_item">台中市东区复兴路四段186号6F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E4%B8%AD%E5%A4%A7%E9%AD%AF%E9%96%A3%E6%96%B0%E6%99%82%E4%BB%A3%E6%AB%83%E4%BD%8D/@24.1357726,120.6851728,17z/data=!3m1!4b1!4m6!3m5!1s0x34693d02abb466a1:0x9022e7fe2ab5ea5!8m2!3d24.1357726!4d120.6877477!16s%2Fg%2F11qrsfvzlb?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台中大远百</div>
                        <div class="store_grid_item">04-22549976</div>
                        <div class="store_grid_item">台中市西屯区台湾大道三段251号10F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E4%B8%AD%E5%A4%A7%E9%81%A0%E7%99%BE%E9%96%80%E5%B8%82/@24.1637002,120.6420418,17z/data=!3m2!4b1!5s0x34693d8cc2164f67:0xf3fb8caee57d4e3a!4m6!3m5!1s0x34693d71ce09ac5d:0xac8ee0d2fcb3e2b9!8m2!3d24.1637002!4d120.6446167!16s%2Fg%2F11l01f_m3j?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台中一中商圈</div>
                        <div class="store_grid_item">04-22250035</div>
                        <div class="store_grid_item">台中市北区太平路44号</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E4%B8%AD%E4%B8%80%E4%B8%AD%E9%96%80%E5%B8%82/@24.1483246,120.6814406,17z/data=!3m1!4b1!4m6!3m5!1s0x34693d329e8669cd:0x8992d926b96c7956!8m2!3d24.1483246!4d120.6840155!16s%2Fg%2F11j4ctmjx2?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">嘉义秀泰百货</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">嘉义市西区文化路299号2F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%98%89%E7%BE%A9%E7%A7%80%E6%B3%B0%E6%AB%83%E4%BD%8D/@23.4852891,120.4451033,17z/data=!3m1!4b1!4m6!3m5!1s0x346e956d8a49b64f:0xddb50a29a64c20aa!8m2!3d23.4852891!4d120.4476782!16s%2Fg%2F11lg03_0c0?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">台南新光三越小西门</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">台南市中西区西门路一段658-1号1F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E5%8D%97%E6%96%B0%E5%85%89%E4%B8%89%E8%B6%8A%E5%B0%8F%E8%A5%BF%E9%96%80%E9%96%80%E5%B8%82/@22.9873418,120.1965377,17z/data=!3m2!4b1!5s0x346e767bf3ecf66b:0x3097d6fa8a67b1f5!4m6!3m5!1s0x346e773f867150a3:0x380368b87bb78f4a!8m2!3d22.9873418!4d120.1991126!16s%2Fg%2F11j0v2njyg?entry=ttu">MAP</a>
                        </div>
                    </div>
					<!-- 113.04.11新增 高雄 大立门市 -->
					<div class="store_grid">
						<div class="store_grid_item">高雄 大立门市</div>
						<div class="store_grid_item">07-2613060</div>
						<div class="store_grid_item">高雄市前金区五福三路57号 3F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/DTpRzRiM47F5Edce9">MAP</a>
						</div>
					</div>
                    <div class="store_grid">
                        <div class="store_grid_item">高雄左营新光三越</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">高雄市左营区高铁路115号3F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E9%AB%98%E9%9B%84%E5%B7%A6%E7%87%9F%E6%96%B0%E5%85%89%E4%B8%89%E8%B6%8A%E9%96%80%E5%B8%82/@22.6878238,120.3066533,17z/data=!3m1!4b1!4m6!3m5!1s0x346e05b6c59ffe71:0x33d45a979093aec5!8m2!3d22.6878238!4d120.3092282!16s%2Fg%2F11hwxzt5rt?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">高雄新崛江</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">高雄市新兴区新田路130号</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E9%AB%98%E9%9B%84%E6%96%B0%E5%B4%9B%E6%B1%9F%E9%96%80%E5%B8%82/@22.6222656,120.3007753,17z/data=!3m1!4b1!4m6!3m5!1s0x346e0484202bf4b9:0x6aa4d57354189e99!8m2!3d22.6222656!4d120.3033502!16s%2Fg%2F11gdkpj_f9?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">高雄冈山乐购广场</div>
                        <div class="store_grid_item">080-0000004</div>
                        <div class="store_grid_item">高雄市冈山区捷安路1巷2号1F</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E9%AB%98%E9%9B%84%E5%B2%A1%E5%B1%B1%E7%A7%80%E6%B3%B0%E6%AB%83%E4%BD%8D/@22.7821085,120.2977583,17z/data=!3m1!4b1!4m6!3m5!1s0x346e0ff005225e85:0x9561e10fdc58bd2e!8m2!3d22.7821085!4d120.3003332!16s%2Fg%2F11t1j943d9?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <div class="store_info_title">新高桥（经销门市）</div>
                    <div class="store_grid">
                        <div class="store_grid_item">梦时代店</div>
                        <div class="store_grid_item">07-8232378</div>
                        <div class="store_grid_item">高雄市前镇区中华五路789号 B2绿区</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E6%96%B0%E9%AB%98%E6%A9%8B%E8%97%A5%E5%A6%9D%E5%A4%A2%E6%99%82%E4%BB%A3%E5%BA%97/@22.5951028,120.3046179,17z/data=!3m2!4b1!5s0x346e0372e8d9952b:0xd1d960a5f0c3b4d6!4m6!3m5!1s0x346e0372e97998d9:0x56ed64dcc5b99121!8m2!3d22.5951028!4d120.3071928!16s%2Fg%2F11f2wp_xq5?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <div class="store_info_title">金橘眼镜（经销门市）</div>
                    <div class="store_grid">
                        <div class="store_grid_item">台中大墩门市</div>
                        <div class="store_grid_item">04 - 23207128</div>
                        <div class="store_grid_item">台中市南屯区大墩路829号</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E9%87%91%E6%A9%98%E7%9C%BC%E9%8F%A1/@24.1555457,120.646983,17z/data=!3m1!4b1!4m6!3m5!1s0x34693d9169178ded:0x7f03eb55972754f9!8m2!3d24.1555457!4d120.6495579!16s%2Fg%2F1hc4_y_dd?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">高雄建国门市</div>
                        <div class="store_grid_item">07 - 2268299</div>
                        <div class="store_grid_item">高雄市苓雅区建国一路300号</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E9%87%91%E6%A9%98%E7%9C%BC%E9%8F%A1+%E9%AB%98%E9%9B%84%E6%97%97%E8%89%A6%E5%BA%97/@22.6329802,120.3207052,17z/data=!3m1!4b1!4m6!3m5!1s0x346e04c0afb3c5f3:0x748167e2e358f0ba!8m2!3d22.6329803!4d120.3255761!16s%2Fg%2F1tg7prts?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <!-- 113.04.11新增 VLENS（经销门市） -->
                    <div class="store_info_title">VLENS（经销门市）</div>
                    <!-- 113.04.11新增 桃园 统领店 -->
                    <div class="store_grid">
                        <div class="store_grid_item">桃园 统领店</div>
                        <div class="store_grid_item">0971-801-575</div>
                        <div class="store_grid_item">桃园市桃园区中正路61号1F (统领广场)</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank" href="https://maps.app.goo.gl/qDZH8E2ZHc7kLS4BA">MAP</a>
                        </div>
                    </div>

                    <!-- 113.04.11新增 DT STORE（经销门市） -->
                    <div class="store_info_title">DT STORE（经销门市）</div>
                    <!-- 113.04.11新增 高雄 苓雅店 -->
                    <div class="store_grid">
                        <div class="store_grid_item">高雄 苓雅店</div>
                        <div class="store_grid_item">07-751-0016</div>
                        <div class="store_grid_item">高雄市苓雅区汉泰街19号</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank" href="https://maps.app.goo.gl/PDDNTsTi2MX8SbRi8">MAP</a>
                        </div>
                    </div>
                    <!-- 113.04.11新增 高雄 鼎山店 -->
                    <div class="store_grid">
                        <div class="store_grid_item">高雄 鼎山店</div>
                        <div class="store_grid_item">07-392-5885</div>
                        <div class="store_grid_item">高雄市三民区鼎山街560号</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank" href="https://maps.app.goo.gl/tXDitKarLVR9uMcX8">MAP</a>
                        </div>
                    </div>
                </div>
                <div id="tw_store1" name="store_show" class="store_online" style="display: none;">
                    <div class="store_online_title">SHARECO线上商店</div>
                    <div class="store_online_pic">
                        <img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
                    </div>
                    <a class="border_btn" target="_blank" target="_blank" href="https://www.shareco.me/">线上购买</a>

                    <div class="store_online_title _border">其他通路</div>
                    <ul class="store_online_group">
                        <li class="store_online_item">
                            <img src="../images/store/lineicon.png" alt="SHARECO lineicon">
                            <a class="border_btn" target="_blank" target="_blank"
                                href="https://giftshop-tw.line.me/brand/10002195">前往购买页面</a>

                        </li>
                        <li class="store_online_item">
                            <img src="../images/store/shopeeicon.png" alt="SHARECO shopeeicon">
                            <a class="border_btn" target="_blank" target="_blank"
                                href="https://shopee.tw/keep_perfume?categoryId=100630&entryPoint=ShopByPDP&itemId=1605467055&upstream=search">前往购买页面</a>
                        </li>
                        <li class="store_online_item">
                            <img src="../images/store/momoicon.png" alt="SHARECO momoicon">
                            <a class="border_btn" target="_blank" target="_blank"
                                href="https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1115002468&p_orderType=4&showType=chessboardType">前往购买页面</a>
                        </li>
                    </ul>
                </div>

                <div id="jp_store0" name="store_show" class="store_nodata fz32to14" style="display: none;">
                    内容建置中，请期待后续更新! <br>
                    相关资讯将同步公布于官方社群
                </div>
                <div id="jp_store1" name="store_show" class="store_nodata fz32to14" style="display: none;">
                    内容建置中，请期待后续更新! <br>
                    相关资讯将同步公布于官方社群
                </div>

                <div id="hk_store0" name="store_show" class="store_info" style="display: none;">
                    <a id="hk_deal" class="border_btn _deal" href="{{ route('cooperate') }}">成为经销</a>
                    <div class="store_info_title">香港</div>
                    <div class="store_grid">
                        <div class="store_grid_item">张梁记 荃新天地店</div>
                        <div class="store_grid_item">+852 6651 2866</div>
                        <div class="store_grid_item">荃湾杨屋道1号荃新天地1期 (UG楼UG52B铺)</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E8%8D%83%E6%96%B0%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89/@22.3696031,114.112363,18z/data=!3m1!4b1!4m6!3m5!1s0x3404016e08bbe7cd:0xc72d5d0c2ec9876d!8m2!3d22.3696031!4d114.1136505!16s%2Fg%2F11rcnvbr1j?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">张梁记 尖沙咀美丽华店</div>
                        <div class="store_grid_item">+852 5485 5110</div>
                        <div class="store_grid_item">香港尖沙咀弥敦道132号 (美丽华广场1期G06)</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E5%B0%96%E6%B2%99%E5%92%80%E5%BA%97%EF%BC%89/@22.3006559,114.169546,17z/data=!3m1!4b1!4m6!3m5!1s0x34040173740fcac5:0x96c8507f82ded706!8m2!3d22.3006559!4d114.1721209!16s%2Fg%2F11hbqt2j4d?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">张梁记 旺角618上海街店</div>
                        <div class="store_grid_item">+852 6677 4005</div>
                        <div class="store_grid_item">香港旺角上海街618号 (1楼102A铺)</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E6%97%BA%E8%A7%92%E5%BA%97%EF%BC%89/@22.3196117,114.1655964,17z/data=!3m2!4b1!5s0x340400c7ec5d0841:0xefa8bdeec61a7485!4m6!3m5!1s0x3404011979a9bd69:0x89ebe8eff2d0f3b4!8m2!3d22.3196117!4d114.1681713!16s%2Fg%2F11fpty__0_?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">张梁记 铜锣湾希慎店</div>
                        <div class="store_grid_item">+852 5291 8462</div>
                        <div class="store_grid_item">香港铜锣湾轩尼诗道500号 (希慎广场5楼 501 铺)</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E9%8A%85%E9%91%BC%E7%81%A3%E5%BA%97%EF%BC%89/@22.2795933,114.181388,17z/data=!3m1!4b1!4m6!3m5!1s0x34040173745c8573:0xd1ab45018d4dda2f!8m2!3d22.2795933!4d114.1839629!16s%2Fg%2F11fy_dgzy9?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">a1shopee</div>
                        <div class="store_grid_item">+852 5689 5208</div>
                        <div class="store_grid_item">香港旺角先达广场1楼F72店</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/%E5%85%88%E9%81%94%E5%BB%A3%E5%A0%B4/@22.3197069,114.1705662,21z/data=!4m6!3m5!1s0x340401b313f3ea2d:0x342e27364e4e32b5!8m2!3d22.319772!4d114.170754!16s%2Fg%2F11kpzc0bbm?entry=ttu">MAP</a>
                        </div>
                    </div>

                </div>
                <div id="hk_store1" name="store_show" class="store_online" style="display: none;">
                    <div class="store_online_title">SHARECO线上商店</div>
                    <div class="store_online_pic">
                        <img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
                    </div>
                    <a class="border_btn _m0" target="_blank"
                        href="https://hk.asiapower-worldwide.com/sperfume">线上购买</a>
                </div>

                <div id="sg_store0" name="store_show" class="store_info" style="display: none;">
                    <a id="sg_deal" class="border_btn _deal" href="{{ route('cooperate') }}">成为经销</a>
                    <div class="store_info_title">新加坡</div>
                    <div class="store_grid">
                        <div class="store_grid_item">MENDATORY<br>BY SGPOMADES</div>
                        <div class="store_grid_item">+65 9477 8385</div>
                        <div class="store_grid_item">10 Tampines Central 1, #01-41, Singapore 529536</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Mendatory+by+SGPomades/@1.354212,103.9424603,17z/data=!3m2!4b1!5s0x31da3d0e20554629:0x9b30d8bf98892e90!4m6!3m5!1s0x31da3d8053f39685:0xa1d1cad01ee3a6e4!8m2!3d1.354212!4d103.9450352!16s%2Fg%2F11s926nx2x?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <!-- 113.04.11新增  -->
					<div class="store_grid">
						<div class="store_grid_item">MENDATORY <br> BY SGPOMADES</div>
						<div class="store_grid_item">+65 9477 8385</div>
						<div class="store_grid_item">Jurong Point Shopping Centre 1 Jurong West Central 2, #02-30, Singapore 648886</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/X1hQHFXRJyA3YQoK8">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">EXIT</div>
						<div class="store_grid_item">+65 8201 8488 /<br> +65 9618 9069</div>
						<div class="store_grid_item">8 Grange Rd, #02-04 Cineleisure, Singapore 239695</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/c4qCjiPoy9k1mzf36">MAP</a>
						</div>
					</div>
                </div>
                <div id="sg_store1" name="store_show" class="store_online" style="display: none;">
                    <div class="store_online_title">SHARECO线上商店</div>
                    <div class="store_online_pic">
                        <img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
                    </div>
                    <a class="border_btn _m0" target="_blank"
                        href="https://sg.asiapower-worldwide.com/perfume_sgp">线上购买</a>
                </div>

                <div id="my_store0" name="store_show" class="store_info" style="display: none;">
                    <a id="my_deal" class="border_btn _deal" href="{{ route('cooperate') }}">成为经销</a>
                    <div class="store_info_title">马来西亚</div>
                    <div class="store_grid">
                        <div class="store_grid_item">158CM CONCEPT STORE</div>
                        <div class="store_grid_item">+6012-2511125</div>
                        <div class="store_grid_item">Eco Palladium, Block B #01-20 Jalan Ekoflora 7/2,
                            Jalan Ekoflora Utama, 81100 , Johor.</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/158CM+Concept+Store/@1.5886719,103.7556924,17z/data=!3m1!4b1!4m6!3m5!1s0x31da6f321414fe79:0x4de6844ac8125e3e!8m2!3d1.5886719!4d103.7582673!16s%2Fg%2F11rklw5w19?entry=ttu">MAP</a>
                        </div>
                    </div>

                    <div class="store_grid">
						<div class="store_grid_item">HMXY Clothing</div>
                        <div class="store_grid_item">+6012-2511125</div>
                        <div class="store_grid_item">12-01, Jalan Austin Heights 8/9, Taman Mount
                            Austin, Johor Bahru, Malaysia</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/HMXY+Clothing/@1.5624589,103.7762811,17z/data=!3m1!4b1!4m6!3m5!1s0x31da6fe5672b1dd3:0x3803fb934a1ae0c!8m2!3d1.5624589!4d103.778856!16s%2Fg%2F11sgxvccq0?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">HYPESTAGES JOHOR</div>
                        <div class="store_grid_item">+6012-2511125</div>
                        <div class="store_grid_item">B-0107 Eco Galleria 3, Jalan Eko Botani 3/2,
                            Taman Eko Botani,79100 Iskandar Puteri,Johor.</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/HYPESTAGES+JOHOR/@1.441071,103.6147545,17z/data=!3m1!4b1!4m6!3m5!1s0x31da0b6263d51f91:0x188c32bc69d8392d!8m2!3d1.441071!4d103.6173294!16s%2Fg%2F11trfdcs2_?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
						<div class="store_grid_item">HYPESTAGES (SELANGOR)</div>
                        <div class="store_grid_item">+6012-2511125</div>
                        <div class="store_grid_item">No71,Jalan PJS 11/7, Bandar Sunway, 47500
                            Petaling Jaya, Selangor</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/HYPESTAGES/@3.0660651,101.5998174,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc4d0608597f07:0x326c792ff0cb9300!8m2!3d3.0660651!4d101.6023923!16s%2Fg%2F11j3tv74ty?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">D.CAGE</div>
                        <div class="store_grid_item">+6012-2511125</div>
                        <div class="store_grid_item">1-GA,Block C Johbase City Square , Jalan Lambak
                            86000 Kluang.Johor.</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/DCAGE/@2.0289918,103.3147565,17z/data=!3m1!4b1!4m6!3m5!1s0x31d06dc3bc28b115:0x40a4e909cf099598!8m2!3d2.0289918!4d103.3196274!16s%2Fg%2F11k530hybn?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">Julyana Scent Studio</div>
						<div class="store_grid_item">+6012-2511125</div>
                        <div class="store_grid_item">block e-2-6 plaza arkadia no.3, jalan intisari perdana, desa
                            parkcity, 52200 kuala lumpur.</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/Julyana+Scent+Studio/@3.1868232,101.6336272,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc497490caf70d:0x436184c0f674c6b4!8m2!3d3.1868232!4d101.6362021!16s%2Fg%2F11ss7nt1tg?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">S Luxury Penang</div>
						<div class="store_grid_item">+6012-2511125</div>
                        <div class="store_grid_item">77-G-10, Times Square Penang, George Town, Malaysia</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/S+Luxury+Penang/@5.4127002,100.323161,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac38168db4547:0x43ade4bfea811120!8m2!3d5.4127002!4d100.3257359!16s%2Fg%2F11k3rkhq41?entry=ttu">MAP</a>
                        </div>
                    </div>
                    <div class="store_grid">
                        <div class="store_grid_item">PNJ</div>
						<div class="store_grid_item">+6012-3785091</div>
						<div class="store_grid_item">19 Jalan Industri Impian 1 Taman Industri Impian 14000 Bukit Mertajam</div>
                        <div class="store_grid_item">
                            <a class="border_btn" target="_blank"
                                href="https://www.google.com/maps/place/ROBINMAY+@+SUNWAY+CARNIVAL+%E7%BB%8F%E9%94%80%E4%BB%A3%E8%B4%AD/@5.3992121,100.3976216,18z/data=!4m6!3m5!1s0x304ac529fac0945b:0x2b1b0c53a306213!8m2!3d5.39918!4d100.3978393!16s%2Fg%2F11scszv49r?entry=ttu">MAP</a>
                        </div>
                    </div>
					<!-- 113.04.11新增 -->
					<div class="store_grid">
						<div class="store_grid_item">158CM CONCEPT STORE</div>
						<div class="store_grid_item">+6012-2511125</div>
						<div class="store_grid_item">TM-038 Third Mezzanine, Mid Valley Southkey Megamall, Persiaran Southkey 1, Kota Southkey, 80150 
							Johor Bahru, Johor</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/rBUY2PLheNhV58L59">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Thebigbang.shop</div>
						<div class="store_grid_item">+6012-2511125</div>
						<div class="store_grid_item">L153, Level 1, The Starhill, No. 181 Jalan Bukit Bintang, 55100 Kuala Lumpur.</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/xfLzG34WXLybCuQ58">MAP</a>
						</div>
					</div>

                </div>
                <div id="my_store1" name="store_show" class="store_online" style="display: none;">
                    <div class="store_online_title">SHARECO线上商店</div>
                    <div class="store_online_pic">
                        <img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
                    </div>
                    <a class="border_btn _m0" target="_blank"
                        href="https://www.asiapower-worldwide.com/YBG_sperfume">线上购买</a>
                </div>

            </div>
        </section>
        <footer id="footer" class="footer">
            @include($footer)
        </footer>
    </div>
    <script src="../js/module.js"></script>
    <script src="../js/banner.js"></script>
    <script src="../js/store.js"></script>
    <script src="../js/aos.js"></script>
    <script>
        AOS.init();
    </script>
</body>

</html>
