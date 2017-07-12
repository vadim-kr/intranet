$(document).ready(function () {

    $('.event .button').click(function () {
        if ($(this).hasClass('going')) {
            $(this).removeClass('going');
            $(this).text('Пойду');
        } else {
            $(this).addClass('going');
            $(this).html("<span class='icon-Checkmark'></span>Иду");
        }
    });

    $('.like').click(function () {
        if ($(this).hasClass('liked')) {
            $(this).removeClass('liked');
        } else {
            $(this).addClass('liked');
        }
    });

    // $('#search-btn').click(function () {
    //     $('.search input').animate({
    //         opacity: 1,
    //         width: "100%"
    //     }, 500);
    //
    //     $(this).animate({
    //         left: 0,
    //         right: 0
    //     }, 500);
    //
    //     $(this).css('color', "#87939C");
    //
    //     $('#close-btn').show("slow");
    // });

    // $('#close-btn').click(function () {
    //     $('.search input').animate({
    //         opacity: 0,
    //         width: 0
    //     }, 500);
    //
    //     $('#search-btn').css({
    //         left: "inherit",
    //         right: "56px"
    //     });
    //
    //     $('#search-btn').css('color', "#000");
    //
    //     $(this).hide();
    // });

    // $('.search .clear').hide('normal');

    $('.search input').keyup(function () {
        if (!this.value){
            $('.search .clear').hide();
        } else {

            $('.search .clear').show();
        }
    });

    $('.search .clear').click(function () {
        $('.search input').val('');
    });
    

    $('#editor').trumbowyg({
        btns: [
            'formatting',
            'btnGrp-semantic',
            ['link'],
            ['insertImage', 'upload'],
            'btnGrp-lists',
        ],
        autogrow: true
    });

    // $('.trumbowyg-button-pane').hide();
    //
    // $('.trumbowyg-editor').click(function () {
    //     $('.trumbowyg-button-pane').show();
    // });
    //
    // $('.trumbowyg-editor').blur(function () {
    //     $('.trumbowyg-button-pane').hide();
    // });

    Dropzone.options.myAwesomeDropzone = false;

    $("div#cover-drop").dropzone({
        url: "/file/post",
        thumbnailWidth: 800,
        thumbnailHeight: 240
    });

    $("div#attach-drop").dropzone({url: "/file/post"});

    $(".btn-default").click(function () {
        if (!$(this).hasClass('active')) {
            $('.btn-default').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('#article-btn').click(function () {
        $('.event-fields').animate({
            opacity: 0,
            height: 0,
            paddingTop: 0
        }, 300, function () {
            $('.event-fields').css('display', 'none');
        });
    });

    $('#event-btn').click(function () {
        $('.event-fields').css('display', 'block');
        $('.event-fields').animate({
            opacity: 1,
            height: "64px",
            paddingTop: "24px"
        }, 300);
    });


    $("#combo-01").scombobox({
        // fullMatch: false,
        // highlight: false
    });

    $('.scombobox-dropdown-arrow').addClass('icon-Expand');
});
