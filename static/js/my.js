$(function () {
    $("#sendMessage").click(function () {
        var value = $("#messageVal").val()
        var phone = $("#phone").val()
        if (!value) {
            layer.msg('请输入内容');
        }
        $.ajax({
            url: 'https://guohe3.com/api/feedback',
            method: 'post',
            async:true,
            data: {
                'name': '官网',
                'content': value,
                'category': 3,
                'contact': phone
            },
            dataType: 'json',
            success: function (data) {
                layer.msg('发送成功');
                $("#messageVal").val = ""
                $("#phone").val = ""
            },
            error: function () {
                alert("获取基本数据异常")

            }
        })

    })
    $("#wechat_public").click(function () {
        layer.open({
            title: false,
            type: 1,
            area: ['500px', '500px'],
            shadeClose: true, //点击遮罩关闭
            content: "<img src='/static/images/public.jpg'>"
        });
    })

    //页面层-佟丽娅
    $("#wechat_app").click(function () {
        layer.open({
            title: false,
            type: 1,
            area: ['500px', '500px'],
            shadeClose: true, //点击遮罩关闭
            content: "<img src='/static/images/logo.jpg'>"
        });
    })

    $.ajax({
        url: '/getData',
        method: 'get',
        async:true,
        success: function (data) {
            clicks_web = data.clicks_web
            $("#web_clicks").attr('data-to', clicks_web)
            clicks_app = data.clicks_app
            $("#app_clicks").attr('data-to', clicks_app)
            users = data.users
            $("#users").attr('data-to', users)
            downloads = parseInt(data.downloads)+1000
            console.log(downloads)
            $("#downloads").attr('data-to', downloads)
            app_version = data.app_version
            $("#app_version").html(app_version)
        },
        error: function () {
            alert("获取基本数据异常")
        }
    })

})

