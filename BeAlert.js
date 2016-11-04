if (typeof $ === 'function') {
    $(function () {
        var nf_dialog = {
            defaultConfig: {
                width: 320,
                height: 170,
                timer: 0,
                type: 'warning',
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonText: '确认',
                cancelButtonText: '取消'
            },
            html: '<div class="nf_dialog_box">' +
            '<div class="nf_dialog_image"></div>' +
            '<div class="nf_dialog_title"></div>' +
            '<div class="nf_dialog_message"></div>' +
            '<div class="nf_dialog_button">' +
            '<button class="nf_dialog_cancel"></button>' +
            '<button class="nf_dialog_confirm"></button>' +
            '</div>' +
            '</div>',
            overlay: '<div class="nf_dialog_overlay"></div>',
            open: function (title, message, callback, o) {
                var opts = {}, that = this;
                $.extend(opts, that.defaultConfig, o);
                $('body').append(that.html).append(that.overlay);
                var box = $('.nf_dialog_box');
                box.css({
                    'width': opts.width + 'px',
                    'min-height': opts.height + 'px',
                    'margin-left': -(opts.width / 2) + 'px'
                });
                $('.nf_dialog_image').addClass(opts.type);
                title && $('.nf_dialog_title').html(title).show(),
                message && $('.nf_dialog_message').html(message).show();
                var confirmBtn = $('.nf_dialog_confirm'), cancelBtn = $('.nf_dialog_cancel');
                opts.showConfirmButton && confirmBtn.text(opts.confirmButtonText).show(),
                opts.showCancelButton && cancelBtn.text(opts.cancelButtonText).show();
                $('.nf_dialog_overlay').unbind('click').bind('click', function () {
                    that.close();
                });
                confirmBtn.unbind('click').bind('click', function () {
                    that.close();
                    typeof callback === 'function' && callback(true);
                });
                cancelBtn.unbind('click').bind('click', function () {
                    that.close();
                    typeof callback === 'function' && callback(false);
                });
                var h = box.height();
                box.css({
                    'margin-top': -(Math.max(h, opts.height) / 2 + 100) + 'px'
                });
            },
            close: function () {
                $(".nf_dialog_overlay,.nf_dialog_box").remove();
            }
        };
        window.alert = function (title, message, callback, opts) {
            nf_dialog.open(title, message, callback, opts);
        };
        var _confirm = window.confirm;
        window.confirm = function (title, callback, opts) {
            opts = $.extend({type: 'question', showCancelButton: true}, opts);
            if (typeof callback === 'function') {
                nf_dialog.open(title, null, callback, opts);
            } else {
                return _confirm(title);
            }
        }
    });
}
