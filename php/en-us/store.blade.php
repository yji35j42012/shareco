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
                    <span id="store_sel" class="store_sel_txt fz24to18">Taiwan / Taiwan</span>
                    <ul id="store_sel_group" class="store_sel_group">
                        <li name="tw" class="store_sel_item">Taiwan / Taiwan</li>
                        <li name="jp" class="store_sel_item">Japan / Japan</li>
                        <li name="hk" class="store_sel_item">Hongkong / Hongkong</li>
                        <li name="sg" class="store_sel_item">Singapore / Singapore</li>
                        <li name="my" class="store_sel_item">Malaysia / Malaysia</li>
                    </ul>
                </label>
                <ul id="store_tab" class="normal_tab">
                    <li id="normal_tab_btn" class="normal_tab_btn">
                        <a id="ph_deal" href="{{ route('cooperate') }}" class="border_btn">Become A Distributor</a>
                    </li>
                    <li class="normal_tab_item on" name="stroe0">Stocklists</li>
                    <li class="normal_tab_data" id="store_ph_data1"></li>
                    <li class="normal_tab_item" name="stroe1">Online Shops</li>
                    <li class="normal_tab_data" id="store_ph_data2"></li>
                </ul>


                <div id="tw_store0" name="store_show" class="store_info" style="display: none;">
                <div class="store_info_title">Flagship Store（Direct Operation）</div>
                <div class="store_grid">
						<div class="store_grid_item">Ximending Flagship Store</div>
						<div class="store_grid_item">+886-2-23820500</div>
						<div class="store_grid_item">1F., No. 155, Xining S. Rd., Wanhua Dist., Taipei City, Taiwan
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E8%A5%BF%E9%96%80%E6%97%97%E8%89%A6%E5%BA%97+1F/@25.0435309,121.5037091,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a99916d62edd:0x285e249a14963382!8m2!3d25.0435309!4d121.506284!16s%2Fg%2F11q3_l0j4m?entry=ttu">MAP</a>
						</div>
					</div>

					<div class="store_info_title">Northern（Direct Operation）</div>
					<div class="store_grid">
						<div class="store_grid_item">Eslite Taipei Wuchang Store</div>
						<div class="store_grid_item">02 - 23757500</div>
						<div class="store_grid_item">1F., No. 77, Sec. 2, Wuchang St., Wanhua Dist., Taipei City, Taiwan
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E6%AD%A6%E6%98%8C%E8%AA%A0%E5%93%81%E5%BA%97+1F/@25.0451616,121.5029968,17z/data=!3m2!4b1!5s0x3442a90921303339:0x9cbb8e377b5bd4e1!4m6!3m5!1s0x3442a9b6ea744f65:0x8dd6d9718d660da5!8m2!3d25.0451616!4d121.5055717!16s%2Fg%2F11jn_zgm8m?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Taipei Xinyi Place A11 Store</div>
						<div class="store_grid_item">02 - 23458500</div>
						<div class="store_grid_item">3F., No. 11, Songshou Rd., Xinyi Dist., Taipei City, Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E4%BF%A1%E7%BE%A9A11%E5%BA%97+3F/@25.0365446,121.564662,17z/data=!3m2!4b1!5s0x3442abba122d5721:0x4e009547ae0f297c!4m6!3m5!1s0x3442abbb58d2e399:0xc3fd965cad49f592!8m2!3d25.0365446!4d121.5672369!16s%2Fg%2F11mts4cww6?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Shin Kong Mitsukoshi Taipei Nanxi Store</div>
						<div class="store_grid_item">+886-2-25817500</div>
						<div class="store_grid_item">4F., No. 15, Nanjing W. Rd., Zhongshan Dist., Taipei City, Taiwan
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E5%8D%97%E8%A5%BF%E5%BA%97+4F/@25.0527457,121.5181246,17z/data=!3m2!4b1!5s0x3442a9694c4bc3b3:0x6c0d4efda97f46eb!4m6!3m5!1s0x3442a9d4b0be17bb:0x13435833f5b82d1c!8m2!3d25.0527457!4d121.5206995!16s%2Fg%2F11r_n1ytkp?entry=ttu">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 新店裕隆城 -->
					<div class="store_grid">
						<div class="store_grid_item">新店裕隆城</div>
						<div class="store_grid_item">02 - 29177500</div>
						<div class="store_grid_item">新北市板橋區新站路28號4F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/CX7MrLYVj5qdVwY99">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Mega City Banqiao Store</div>
						<div class="store_grid_item">+886-2-29617500</div>
						<div class="store_grid_item">4F., No. 28, Xinzhan Rd., Banqiao Dist., New Taipei City, Taiwan
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E6%9D%BF%E6%A9%8B%E5%A4%A7%E9%81%A0%E7%99%BE%E5%BA%97+4F/@25.0133485,121.4636792,17z/data=!3m2!4b1!5s0x3442a818c143c69f:0x16258e8aadde7050!4m6!3m5!1s0x3442a91b0bce4667:0x971d7a9a1c15fd41!8m2!3d25.0133485!4d121.4662541!16s%2Fg%2F11jp163cxr?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Big City Shopping Mall Store</div>
						<div class="store_grid_item">+886-3-5430500</div>
						<div class="store_grid_item">3F., No. 229, Zhongyang Rd., East Dist., Hsinchu City, Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E5%B7%A8%E5%9F%8E%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83%E5%BA%97+3F/@24.8094861,120.9721461,17z/data=!3m1!4b1!4m6!3m5!1s0x3468350070733b41:0xbabb0c6c88b3f5e!8m2!3d24.8094861!4d120.974721!16s%2Fg%2F11lh8k_81d?entry=ttu">MAP</a>
						</div>
					</div>

					<div class="store_info_title">Central（Direct Operation）</div>
					<div class="store_grid">
						<div class="store_grid_item">Eslite Park Lane Shopping Complex</div>
						<div class="store_grid_item">04 - 23250500</div>
						<div class="store_grid_item">2F., No. 68, Gongyi Rd., West Dist., Taichung City, Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E5%8F%B0%E4%B8%AD%E5%8B%A4%E7%BE%8E%E8%AA%A0%E5%93%81%E5%BA%97+2F/@24.1512354,120.6612731,17z/data=!3m2!4b1!5s0x34693da7ea2e65ff:0x98716b37bd87af65!4m6!3m5!1s0x34693d66b871aeb1:0x2cf1278063e559a2!8m2!3d24.1512354!4d120.663848!16s%2Fg%2F11rwkyzlg4?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Shin Kong Mitsukoshi Taichung Store</div>
						<div class="store_grid_item">04 - 22547500</div>
						<div class="store_grid_item">5F., No. 301, Sec. 3, Taiwan Blvd., Xitun Dist., Taichung City,
							Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E4%B8%AD%E6%B8%AF%E5%BA%97+5F/@24.1647673,120.6408999,17z/data=!3m2!4b1!5s0x34693d8cb8ab5429:0x2f454b8b4bd8182f!4m6!3m5!1s0x34693d715d33a281:0x96b9d958e2df698d!8m2!3d24.1647673!4d120.6434748!16s%2Fg%2F11lskjs7sm?entry=ttu">MAP</a>
						</div>
					</div>

					<div class="store_info_title">Southern（Direct Operation）</div>
					<div class="store_grid">
						<div class="store_grid_item">Shin Kong Mitsukoshi Chiayi Store</div>
						<div class="store_grid_item">+886-5-2230550</div>
						<div class="store_grid_item">5F., No. 726, Chuiyang Rd., West Dist., Chiayi City, Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E5%9E%82%E6%A5%8A%E5%BA%97+5F/@23.4737196,120.4384317,17z/data=!3m2!4b1!5s0x346e94268353b0b3:0xf1bea1caf740e72!4m6!3m5!1s0x346e951ac0169307:0xe86f62bb4ce6f277!8m2!3d23.4737196!4d120.4410066!16s%2Fg%2F11p74st4_c?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Shin Kong Mitsukoshi Tainan Store</div>
						<div class="store_grid_item">+886-6-3030501</div>
						<div class="store_grid_item">4F., No. 658, Sec. 1, Ximen Rd., West Central Dist., Tainan City,
							Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E6%96%B0%E5%85%89%E6%96%B0%E5%A4%A9%E5%9C%B0%E5%BA%97+4F/@22.9873418,120.1965377,17z/data=!3m2!4b1!5s0x346e767bf3ecf66b:0x3097d6fa8a67b1f5!4m6!3m5!1s0x346e77d9f89db26d:0xfe5fb266835228f4!8m2!3d22.9873418!4d120.1991126!16s%2Fg%2F11pv2sfm5v?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Focus Square Store</div>
						<div class="store_grid_item">+886-6-2200500</div>
						<div class="store_grid_item">1F., No. 166, Zhongshan Rd., West Central Dist., Tainan City,
							Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E5%8F%B0%E5%8D%97Focus%E5%BA%97+1F/@22.9955969,120.2074887,17z/data=!3m2!4b1!5s0x346e76892a1b58b3:0x7d9d18f91a2cb024!4m6!3m5!1s0x346e77c0967b4105:0xaa4e8c610d95f802!8m2!3d22.9955969!4d120.2100636!16s%2Fg%2F11p00_0z_x?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Hanshin Arena Shopping Plaza Store</div>
						<div class="store_grid_item">+886-7-5554500</div>
						<div class="store_grid_item">4F., No. 777, Bo'ai 2nd Rd., Zuoying Dist., Kaohsiung City, Taiwan
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E6%BC%A2%E7%A5%9E%E5%B7%A8%E8%9B%8B%E5%BA%97+4F/@22.6695925,120.2974151,17z/data=!3m2!4b1!5s0x346e0508af6f275f:0x5c95d0733851cbdf!4m6!3m5!1s0x346e056fc9daab4d:0x824b9f97f953a664!8m2!3d22.6695926!4d120.302286!16s%2Fg%2F11mvmw1q1l?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Dream Mall Store</div>
						<div class="store_grid_item">+886-7-8137500</div>
						<div class="store_grid_item">7F., No. 789, Zhonghua 5th Rd., Qianzhen Dist., Kaohsiung City,
							Taiwan</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/YBG.inc+%E5%A4%A2%E6%99%82%E4%BB%A3%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83%E5%BA%97+7F/@22.5947386,120.3041607,17z/data=!3m2!4b1!5s0x346e0372e920ceed:0xd1d960a592e9ab80!4m6!3m5!1s0x346e039f5aaae6b7:0x28c0c5e2d1c6e16e!8m2!3d22.5947386!4d120.3067356!16s%2Fg%2F11ll78ffr5?entry=ttu">MAP</a>
						</div>
					</div>

                    <div class="store_info_title">Bonny & Read（distributor store）</div>
					<!-- 113.04.11新增 台北 京站門市 -->
					<div class="store_grid">
						<div class="store_grid_item">台北 京站門市</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">台北市大同區承德路一段1號 B1F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/U1u24QQoj1bJs9Bv8">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">CITYLINK</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">2F., No. 369, Sec. 7, Zhongxiao E. Rd., Nangang Dist., Taipei City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E5%8C%97%E5%8D%97%E6%B8%AFCITYLINK%E6%AB%83%E4%BD%8D/@25.0525582,121.6019431,17z/data=!3m2!4b1!5s0x3442ab6760ef6ba7:0xca513c3eeb99856a!4m6!3m5!1s0x3442ab6443141983:0x1fbdbc7e35d983ed!8m2!3d25.0525582!4d121.604518!16s%2Fg%2F11lllg6y_s?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Global Mall</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">2F., No. 122, Sec. 3, Zhongshan Rd., Zhonghe Dist., New Taipei City , Taiwan
							(R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E6%96%B0%E5%8C%97%E4%B8%AD%E5%92%8C%E7%92%B0%E7%90%83%E9%96%80%E5%B8%82/@25.0061984,121.472539,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a964c39a1dc5:0x634d9e7f1768778c!8m2!3d25.0061984!4d121.4751139!16s%2Fg%2F11hf4rcy4g?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">HONHUI PLAZA</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">3F., No. 3, Sec. 4, New Taipei Blvd., Xinzhuang Dist., New Taipei City ,
							Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E6%96%B0%E5%8C%97%E5%AE%8F%E5%8C%AF%E5%BB%A3%E5%A0%B4%E9%96%80%E5%B8%82/@25.0597609,121.4469494,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a9b53ec384f5:0x3365ad5c73467ee9!8m2!3d25.0597609!4d121.4495243!16s%2Fg%2F11m2c2m3zf?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Showtime Live Shulin Store</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">2F., No. 40-6, Shuxin Rd., Shulin Dist., New Taipei City , Taiwan
							(R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny%26Read%E9%A3%BE%E5%93%81+%E6%96%B0%E5%8C%97%E6%A8%B9%E6%9E%97%E7%A7%80%E6%B3%B0%E6%AB%83%E4%BD%8D/@24.9955095,121.4257911,17z/data=!3m1!4b1!4m6!3m5!1s0x34681dd5fefef6a1:0xd7a6e2d40c32bf28!8m2!3d24.9955095!4d121.428366!16s%2Fg%2F11p5j73nlj?entry=ttu">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 桃園新光影城店 -->
					<div class="store_grid">
						<div class="store_grid_item">桃園新光影城店</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">桃園市中壢區春德路107號 1F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/BGEwC4jrVc1cS4Dc6">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">TaiMall</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">B2., No. 112, Sec. 1, Nankan Rd., Luzhu Dist., Taoyuan City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E6%A1%83%E5%9C%92%E5%8F%B0%E8%8C%82%E8%B3%BC%E7%89%A9%E4%B8%AD%E5%BF%83%E6%AB%83%E4%BD%8D/@25.0530591,121.2853061,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a158686285fb:0x8cae521ac5f7c614!8m2!3d25.0530591!4d121.287881!16s%2Fg%2F11kx5w6q89?entry=ttu">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 新竹 遠東百貨店 -->
					<div class="store_grid">
						<div class="store_grid_item">新竹 遠東百貨店</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">新竹縣竹北市莊敬北路18號 3F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/q1Qax2tdck4YMRhBA">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 新竹 大魯閣湳雅店 -->
					<div class="store_grid">
						<div class="store_grid_item">新竹 大魯閣湳雅店</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">新竹市北區大雅路88號 1F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/Kb4i4U4d2v1EFQC18">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 台中 誠品480門市 -->
					<div class="store_grid">
						<div class="store_grid_item">台中 誠品480門市</div>
						<div class="store_grid_item">04-22516898</div>
						<div class="store_grid_item">：台中市西屯區市政路480號 3F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/m845EuoM552U3tmw5">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">TAROKO MALL</div>
						<div class="store_grid_item">04-22221261</div>
						<div class="store_grid_item">6F., No. 186, Luqiaoxiaxi, Sec. 4, Fuxing Rd., Taichung City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E4%B8%AD%E5%A4%A7%E9%AD%AF%E9%96%A3%E6%96%B0%E6%99%82%E4%BB%A3%E6%AB%83%E4%BD%8D/@24.1357726,120.6851728,17z/data=!3m1!4b1!4m6!3m5!1s0x34693d02abb466a1:0x9022e7fe2ab5ea5!8m2!3d24.1357726!4d120.6877477!16s%2Fg%2F11qrsfvzlb?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Top City</div>
						<div class="store_grid_item">04-22549976</div>
						<div class="store_grid_item">10F., No. 251, Sec. 3, Taiwan Blvd., Xitun Dist., Taichung City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E4%B8%AD%E5%A4%A7%E9%81%A0%E7%99%BE%E9%96%80%E5%B8%82/@24.1637002,120.6420418,17z/data=!3m2!4b1!5s0x34693d8cc2164f67:0xf3fb8caee57d4e3a!4m6!3m5!1s0x34693d71ce09ac5d:0xac8ee0d2fcb3e2b9!8m2!3d24.1637002!4d120.6446167!16s%2Fg%2F11l01f_m3j?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Yizhong Shopping District</div>
						<div class="store_grid_item">04-22250035</div>
						<div class="store_grid_item">No. 44, Taiping Rd., North Dist., Taichung City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E4%B8%AD%E4%B8%80%E4%B8%AD%E9%96%80%E5%B8%82/@24.1483246,120.6814406,17z/data=!3m1!4b1!4m6!3m5!1s0x34693d329e8669cd:0x8992d926b96c7956!8m2!3d24.1483246!4d120.6840155!16s%2Fg%2F11j4ctmjx2?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Showtime Life Chiayi</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">2F., No. 299, Wenhua Rd., West Dist., Chiayi City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%98%89%E7%BE%A9%E7%A7%80%E6%B3%B0%E6%AB%83%E4%BD%8D/@23.4852891,120.4451033,17z/data=!3m1!4b1!4m6!3m5!1s0x346e956d8a49b64f:0xddb50a29a64c20aa!8m2!3d23.4852891!4d120.4476782!16s%2Fg%2F11lg03_0c0?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Shinkong Mitsukoshi Mall (Tainan Place)</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">1F., No. 658-1, Sec. 1, Ximen Rd., West Central Dist.,
							Tainan City , Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E5%8F%B0%E5%8D%97%E6%96%B0%E5%85%89%E4%B8%89%E8%B6%8A%E5%B0%8F%E8%A5%BF%E9%96%80%E9%96%80%E5%B8%82/@22.9873418,120.1965377,17z/data=!3m2!4b1!5s0x346e767bf3ecf66b:0x3097d6fa8a67b1f5!4m6!3m5!1s0x346e773f867150a3:0x380368b87bb78f4a!8m2!3d22.9873418!4d120.1991126!16s%2Fg%2F11j0v2njyg?entry=ttu">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 高雄 大立門市 -->
					<div class="store_grid">
						<div class="store_grid_item">高雄 大立門市</div>
						<div class="store_grid_item">07-2613060</div>
						<div class="store_grid_item">高雄市前金區五福三路57號 3F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/DTpRzRiM47F5Edce9">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Shinkong Mitsukoshi Mall (Zuoying)</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">3F., No. 115, Gaotie Rd., Zuoying Dist., Kaohsiung City,
							Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E9%AB%98%E9%9B%84%E5%B7%A6%E7%87%9F%E6%96%B0%E5%85%89%E4%B8%89%E8%B6%8A%E9%96%80%E5%B8%82/@22.6878238,120.3066533,17z/data=!3m1!4b1!4m6!3m5!1s0x346e05b6c59ffe71:0x33d45a979093aec5!8m2!3d22.6878238!4d120.3092282!16s%2Fg%2F11hwxzt5rt?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Shinkuchan</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">No. 130, Xintian Rd., Xinxing Dist., Kaohsiung City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E9%AB%98%E9%9B%84%E6%96%B0%E5%B4%9B%E6%B1%9F%E9%96%80%E5%B8%82/@22.6222656,120.3007753,17z/data=!3m1!4b1!4m6!3m5!1s0x346e0484202bf4b9:0x6aa4d57354189e99!8m2!3d22.6222656!4d120.3033502!16s%2Fg%2F11gdkpj_f9?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Lovego Plaza</div>
						<div class="store_grid_item">080-0000004</div>
						<div class="store_grid_item">1F., No. 2, Ln. 1, Jie'an Rd., Gangshan Dist., Kaohsiung City , Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Bonny+%26+Read%E9%A3%BE%E5%93%81+%E9%AB%98%E9%9B%84%E5%B2%A1%E5%B1%B1%E7%A7%80%E6%B3%B0%E6%AB%83%E4%BD%8D/@22.7821085,120.2977583,17z/data=!3m1!4b1!4m6!3m5!1s0x346e0ff005225e85:0x9561e10fdc58bd2e!8m2!3d22.7821085!4d120.3003332!16s%2Fg%2F11t1j943d9?entry=ttu">MAP</a>
						</div>
					</div>

					<div class="store_info_title">BRIDGE DRUG（distributor store）</div>
					<div class="store_grid">
						<div class="store_grid_item">BRIDGE DRUG （Dream Mall）</div>
						<div class="store_grid_item">07-8232378</div>
						<div class="store_grid_item">B2., No. 789, Zhonghua 5th Rd., Qianzhen Dist., Kaohsiung City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/%E6%96%B0%E9%AB%98%E6%A9%8B%E8%97%A5%E5%A6%9D%E5%A4%A2%E6%99%82%E4%BB%A3%E5%BA%97/@22.5951028,120.3046179,17z/data=!3m2!4b1!5s0x346e0372e8d9952b:0xd1d960a5f0c3b4d6!4m6!3m5!1s0x346e0372e97998d9:0x56ed64dcc5b99121!8m2!3d22.5951028!4d120.3071928!16s%2Fg%2F11f2wp_xq5?entry=ttu">MAP</a>
						</div>
					</div>

					<div class="store_info_title">Jinju eyewear（distributor store）</div>
					<div class="store_grid">
						<div class="store_grid_item">Jinju eyewear （ Dadun）</div>
						<div class="store_grid_item">04 - 23207128</div>
						<div class="store_grid_item">No. 829, Dadun Rd., Xitun Dist., Taichung City , Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/%E9%87%91%E6%A9%98%E7%9C%BC%E9%8F%A1/@24.1555457,120.646983,17z/data=!3m1!4b1!4m6!3m5!1s0x34693d9169178ded:0x7f03eb55972754f9!8m2!3d24.1555457!4d120.6495579!16s%2Fg%2F1hc4_y_dd?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Jinju eyewear （ Jianguo）</div>
						<div class="store_grid_item">07 - 2268299</div>
						<div class="store_grid_item">No. 300, Jianguo 1st Rd., Lingya Dist., Kaohsiung City, Taiwan (R.O.C.)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/%E9%87%91%E6%A9%98%E7%9C%BC%E9%8F%A1+%E9%AB%98%E9%9B%84%E6%97%97%E8%89%A6%E5%BA%97/@22.6329802,120.3207052,17z/data=!3m1!4b1!4m6!3m5!1s0x346e04c0afb3c5f3:0x748167e2e358f0ba!8m2!3d22.6329803!4d120.3255761!16s%2Fg%2F1tg7prts?entry=ttu">MAP</a>
						</div>
					</div>

					<!-- 113.04.11新增 VLENS（經銷門市） -->
					<div class="store_info_title">VLENS（經銷門市）</div>
					<!-- 113.04.11新增 桃園 統領店 -->
					<div class="store_grid">
						<div class="store_grid_item">桃園 統領店</div>
						<div class="store_grid_item">0971-801-575</div>
						<div class="store_grid_item">桃園市桃園區中正路61號1F (統領廣場)</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/qDZH8E2ZHc7kLS4BA">MAP</a>
						</div>
					</div>

					<!-- 113.04.11新增 DT STORE（經銷門市） -->
					<div class="store_info_title">DT STORE（經銷門市）</div>
					<!-- 113.04.11新增 高雄 苓雅店 -->
					<div class="store_grid">
						<div class="store_grid_item">高雄 苓雅店</div>
						<div class="store_grid_item">07-751-0016</div>
						<div class="store_grid_item">高雄市苓雅區漢泰街19號</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/PDDNTsTi2MX8SbRi8">MAP</a>
						</div>
					</div>
					<!-- 113.04.11新增 高雄 鼎山店 -->
					<div class="store_grid">
						<div class="store_grid_item">高雄 鼎山店</div>
						<div class="store_grid_item">07-392-5885</div>
						<div class="store_grid_item">高雄市三民區鼎山街560號</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/tXDitKarLVR9uMcX8">MAP</a>
						</div>
					</div>
                </div>
                <div id="tw_store1" name="store_show" class="store_online" style="display: none;">
                    <div class="store_online_title">SHARECO線上商店</div>
                    <div class="store_online_pic">
                        <img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
                    </div>
                    <a class="border_btn" target="_blank" target="_blank" href="https://www.shareco.me/">線上購買</a>

                    <div class="store_online_title _border">其他通路</div>
                    <ul class="store_online_group">
                        <li class="store_online_item">
                            <img src="../images/store/lineicon.png" alt="SHARECO lineicon">
                            <a class="border_btn" target="_blank" target="_blank"
                                href="https://giftshop-tw.line.me/brand/10002195">前往購買頁面</a>

                        </li>
                        <li class="store_online_item">
                            <img src="../images/store/shopeeicon.png" alt="SHARECO shopeeicon">
                            <a class="border_btn" target="_blank" target="_blank"
                                href="https://shopee.tw/keep_perfume?categoryId=100630&entryPoint=ShopByPDP&itemId=1605467055&upstream=search">前往購買頁面</a>
                        </li>
                        <li class="store_online_item">
                            <img src="../images/store/momoicon.png" alt="SHARECO momoicon">
                            <a class="border_btn" target="_blank" target="_blank"
                                href="https://www.momoshop.com.tw/category/DgrpCategory.jsp?d_code=1115002468&p_orderType=4&showType=chessboardType">前往購買頁面</a>
                        </li>
                    </ul>
                </div>

				<div id="jp_store0" name="store_show" class="store_nodata fz32to14" style="display: none;">
					The contents of this website are being organized, please come back soon for an update!<br>
					Relevant information will be announced on official social media pages!
				</div>
				<div id="jp_store1" name="store_show" class="store_nodata fz32to14" style="display: none;">
					The contents of this website are being organized, please come back soon for an update!<br>
					Relevant information will be announced on official social media pages!
				</div>

				<div id="hk_store0" name="store_show" class="store_info" style="display: none;">
					<a id="hk_deal" class="border_btn _deal" href="{{ route('cooperate') }}">Become A Distributor</a>
					<div class="store_info_title">Hongkong</div>
					<div class="store_grid">
						<div class="store_grid_item">cheung leung kee （ Tsuen Wan）</div>
						<div class="store_grid_item">+852 6651 2866</div>
						<div class="store_grid_item">Citywalk, Tsuen Wan,Shop UG52B, UG/F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E8%8D%83%E6%96%B0%E5%A4%A9%E5%9C%B0%E5%BA%97%EF%BC%89/@22.3696031,114.112363,18z/data=!3m1!4b1!4m6!3m5!1s0x3404016e08bbe7cd:0xc72d5d0c2ec9876d!8m2!3d22.3696031!4d114.1136505!16s%2Fg%2F11rcnvbr1j?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">cheung leung kee （ Tsim Sha Tsui Mira Store）</div>
						<div class="store_grid_item">+852 5485 5110</div>
						<div class="store_grid_item">Nathan Road, Tsim Sha Tsui,Shop G06, Mira Place 1</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E5%B0%96%E6%B2%99%E5%92%80%E5%BA%97%EF%BC%89/@22.3006559,114.169546,17z/data=!3m1!4b1!4m6!3m5!1s0x34040173740fcac5:0x96c8507f82ded706!8m2!3d22.3006559!4d114.1721209!16s%2Fg%2F11hbqt2j4d?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">cheung leung kee （ Mong Kok 618 Shanghai Street Store）</div>
						<div class="store_grid_item">+852 6677 4005</div>
						<div class="store_grid_item">618 Shanghai Street, Mong Kok, Shop 102A, 1/F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E6%97%BA%E8%A7%92%E5%BA%97%EF%BC%89/@22.3196117,114.1655964,17z/data=!3m2!4b1!5s0x340400c7ec5d0841:0xefa8bdeec61a7485!4m6!3m5!1s0x3404011979a9bd69:0x89ebe8eff2d0f3b4!8m2!3d22.3196117!4d114.1681713!16s%2Fg%2F11fpty__0_?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">cheung leung kee （Causeway Bay Hysan Store）</div>
						<div class="store_grid_item">+852 5291 8462</div>
						<div class="store_grid_item">Hysan Place, 500 Hennessy Road, Causeway Bay,Shop 501, 5/F</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/%E5%BC%B5%E6%A2%81%E8%A8%98+Cheung+Leung+Kee%EF%BC%88%E9%8A%85%E9%91%BC%E7%81%A3%E5%BA%97%EF%BC%89/@22.2795933,114.181388,17z/data=!3m1!4b1!4m6!3m5!1s0x34040173745c8573:0xd1ab45018d4dda2f!8m2!3d22.2795933!4d114.1839629!16s%2Fg%2F11fy_dgzy9?entry=ttu">MAP</a>
						</div>
					</div>


				</div>
				<div id="hk_store1" name="store_show" class="store_online" style="display: none;">
					<div class="store_online_title">SHARECO Online Shop</div>
					<div class="store_online_pic">
						<img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
					</div>
					<a class="border_btn _m0" target="_blank" href="https://hk.asiapower-worldwide.com/sperfume">Go To
						Shop</a>
				</div>

				<div id="sg_store0" name="store_show" class="store_info" style="display: none;">
					<a id="sg_deal" class="border_btn _deal" href="{{ route('cooperate') }}">Become A Distributor</a>
					<div class="store_info_title">Singapore</div>
					<div class="store_grid">
						<div class="store_grid_item">MENDATORY<br>BY SGPOMADES</div>
						<div class="store_grid_item">+65 9477 8385</div>
						<div class="store_grid_item">10 Tampines Central 1, #01-41, Singapore 529536</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Mendatory+by+SGPomades/@1.354212,103.9424603,17z/data=!3m2!4b1!5s0x31da3d0e20554629:0x9b30d8bf98892e90!4m6!3m5!1s0x31da3d8053f39685:0xa1d1cad01ee3a6e4!8m2!3d1.354212!4d103.9450352!16s%2Fg%2F11s926nx2x?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">The Barrack Shop</div>
						<div class="store_grid_item"></div>
						<div class="store_grid_item">710 Geylang Road. TheBarrackShop</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://maps.app.goo.gl/cXXrzJDLSmpzCwgWA">MAP</a>
						</div>
					</div>
				</div>
				<div id="sg_store1" name="store_show" class="store_online" style="display: none;">
					<div class="store_online_title">SHARECO Online Shop</div>
					<div class="store_online_pic">
						<img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
					</div>
					<a class="border_btn _m0" target="_blank" href="https://sg.asiapower-worldwide.com/perfume_sgp">Go
						To Shop</a>
				</div>

				<div id="my_store0" name="store_show" class="store_info" style="display: none;">
					<a id="my_deal" class="border_btn _deal" href="{{ route('cooperate') }}">Become A Distributor</a>
					<div class="store_info_title">Malaysia</div>
					<div class="store_grid">
						<div class="store_grid_item">158CM CONCEPT STORE</div>
						<div class="store_grid_item">+6012-2511125</div>
						<div class="store_grid_item">Eco Palladium, Block B #01-20 Jalan Ekoflora 7/2, Jalan Ekoflora
							Utama, 81100 , Johor.</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/158CM+Concept+Store/@1.5886719,103.7556924,17z/data=!3m1!4b1!4m6!3m5!1s0x31da6f321414fe79:0x4de6844ac8125e3e!8m2!3d1.5886719!4d103.7582673!16s%2Fg%2F11rklw5w19?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">HMXY</div>
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
						<div class="store_grid_item">HYPESTAGES</div>
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
						<div class="store_grid_item">-</div>
						<div class="store_grid_item">block e-2-6 plaza arkadia no.3, jalan intisari perdana, desa
							parkcity, 52200 kuala lumpur.</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/Julyana+Scent+Studio/@3.1868232,101.6336272,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc497490caf70d:0x436184c0f674c6b4!8m2!3d3.1868232!4d101.6362021!16s%2Fg%2F11ss7nt1tg?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">S Luxury Penang</div>
						<div class="store_grid_item">-</div>
						<div class="store_grid_item">77-G-10, Times Square Penang, George Town, Malaysia</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/S+Luxury+Penang/@5.4127002,100.323161,17z/data=!3m1!4b1!4m6!3m5!1s0x304ac38168db4547:0x43ade4bfea811120!8m2!3d5.4127002!4d100.3257359!16s%2Fg%2F11k3rkhq41?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">PNJ Robinmay</div>
						<div class="store_grid_item">-</div>
						<div class="store_grid_item">2F-29 Second Floor, Sunway Carnival Mall, 13700 Perai, Pulau Pinang
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank"
								href="https://www.google.com/maps/place/ROBINMAY+@+SUNWAY+CARNIVAL+%E7%BB%8F%E9%94%80%E4%BB%A3%E8%B4%AD/@5.3992121,100.3976216,18z/data=!4m6!3m5!1s0x304ac529fac0945b:0x2b1b0c53a306213!8m2!3d5.39918!4d100.3978393!16s%2Fg%2F11scszv49r?entry=ttu">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">Julyana Scent Studio</div>
						<div class="store_grid_item">-</div>
						<div class="store_grid_item">BLOCK E-2-6 PLAZA ARKADIA NO.3, JALAN INTISARI PERDANA,
							DESA PARKCITY, 52200 KUALA LUMPUR.
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/HCv4n622d26Yn8bZ9">MAP</a>
						</div>
					</div>
					<div class="store_grid">
						<div class="store_grid_item">SUN BARBERSHOP</div>
						<div class="store_grid_item">-</div>
						<div class="store_grid_item">NO.27-01,jalan Austin heights 7/5 Austin Heights Taman Mount Austin,
							Mount Austin, 81100 Johor Bahru, Johor
						</div>
						<div class="store_grid_item">
							<a class="border_btn" target="_blank" href="https://maps.app.goo.gl/abfTshcjgwU8qJvs7">MAP</a>
						</div>
					</div>
				</div>
				<div id="my_store1" name="store_show" class="store_online" style="display: none;">
					<div class="store_online_title">SHARECO Online Shop</div>
					<div class="store_online_pic">
						<img src="../images/store/onlinestore_banner.jpg" alt="SHARECO onlinestore_banner">
					</div>
					<a class="border_btn _m0" target="_blank" href="https://www.asiapower-worldwide.com/YBG_sperfume">Go
						To Shop</a>
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
