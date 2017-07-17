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

    $('.search input').keyup(function () {
        if (!this.value) {
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

    Dropzone.options.myAwesomeDropzone = false;

    $("div#cover-drop").dropzone({
        url: "/file/post",
        thumbnailWidth: 800,
        thumbnailHeight: 240
    });


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
            height: "152px",
            paddingTop: "24px"
        }, 300);
    });


    $("#combo-01").scombobox({});

    $(".scombobox-dropdown-arrow").addClass('icon-Expand');

    $("header .user-pic").hover(function () {
    });

    $("header #user").hover(
        function () {
            var position = $('.user-pic').offset();

            $('.user-menu').css({
                'display': 'block',
                'left': position.left - 168
            });
            $('.user-menu').animate({
                opacity: 1
            });
        },
        function () {
            $('.user-menu').animate({
                opacity: 0
            });

            $('.user-menu').css('display', 'none');

        });
});
