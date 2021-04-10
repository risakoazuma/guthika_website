$(function(){
    /**
     * ハンバーガーメニュー
     */
    var openImage = 'img/sp/open.svg';
    var closeImage = 'img/sp/close.svg';

    $('#menuButton').on('click', function(){
        $('#menuButton').toggleClass('active');
        $('#nav').toggleClass('active');
    });

    /**
     * スライドショー
     */
    $('#slideContents').slick({
        // 自動再生
        autoplay: true,
        // 再生スピード
        autoplaySpeed: 3000, // ミリ秒
        // ページ遷移のスピード
        speed: 500,
        // ページ送りの表示
        dots: true,
        // マウスホバー時にスライドを止めない
        pauseOnHover: false,
        // ドット選択時にスライドを止めない
        pauseOnFocus: false,
        // フェード
        fade: true,
    });

    /**
     * フワッと出現
     */
    // 1. 要素の位置を取得
    var workPosY = 0;
    if ($('#mainBlock').length > 0)
    {
    workPosY = $('#mainBlock').offset().top;
    }
    console.log('workPosY: ' + workPosY);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy: ' + dy);

        // 3. 条件文
        if(dy > workPosY - $(window).height())
        {
            console.log("クラスをつけるよ");
            // 4. 対象要素にクラスの付与
            $('#mainBlock > a > section').addClass('fade-in');
        }
    });

    /**
     * モーダル
     */
    // 1. 画像パスの配列準備
    // var imageSrcArray = [
    //     'img/sakurai.png',
    //     'img/guthika_main.jpeg',
    //     'img/price.jpeg',
    // ];

    // // 2. #mainBlock sectionクリック時
    // $('#mainBlock > section').on('click', function(){
    //     console.log('mainblockクリックしたよ');
    //     // 3. sectionの何番目を押したか判定
    //     var index = $(this).index();
    //     console.log('sectionの番号: ' + index);

    //     // 4. modalに入るHTML作成, 変数var modalContentに代入
    //     var modalContent = '<figure class="modal"><img src="' + imageSrcArray[index] + '" alt=""></figure>';

    //     // 5. #overlayの中のHTMLを書き換え、.fade-inを追加
    //     $('#overlay').html(modalContent);
    //     $('#overlay').addClass('fade-in');

    //     // 6. #overlayを再度クリックした時、.fade-inを削除
    //     $('#overlay').on('click', function(){
    //         $('#overlay').removeClass('fade-in');
    //     });
    // });

    /**
     * ページトップ
     */
    $('#pageTop').on('click', function(){
        console.log('ページトップクリックしたよ');

        $('html').animate({
            scrollTop: 0
        }, 1000);

        // リンクの無効化
        return false;
    });

    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();

        if(dy > 200)
        {
            $('#pageTop').addClass('fade-in');
        }
        else
        {
            $('#pageTop').removeClass('fade-in');
        }
    });

    /**
     * ページ内リンク
     */
    $('#navList li a').on('click', function(){
        // クリックしたhref属性の文字列を取得
        // $('要素').attr('属性');
        // 今回の要素は this
        var link = $(this).attr('href');
        console.log(link);
        
        // 目的のidの高さ取得
        // $('要素').offset().top;
        var linkPosY = $(link).offset().top;

        // 目的のidまで移動
        $('html').animate({
            scrollTop: linkPosY
        }, 1000);
        // リンクの解除
        return false;
    });

    $('#footerNav li a').on('click', function(){
        // クリックしたhref属性の文字列を取得
        // $('要素').attr('属性');
        // 今回の要素は this
        var link = $(this).attr('href');
        console.log(link);
        
        // 目的のidの高さ取得
        // $('要素').offset().top;
        var linkPosY = $(link).offset().top;

        // 目的のidまで移動
        $('html').animate({
            scrollTop: linkPosY
        }, 1000);
        // リンクの解除
        return false;
});
    $('.o-item').on('click', function(){
        console.log('クリックしたよ');
        $(this).toggleClass('on');
    });


});