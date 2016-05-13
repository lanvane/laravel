<!DOCTYPE html>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>忘记密码</title>

    <link href="{{asset('style/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('style/font-awesome/css/font-awesome.css')}}" rel="stylesheet">

    <link href="{{asset('style/css/animate.css')}}" rel="stylesheet">
    <link href="{{asset('style/css/style.css')}}" rel="stylesheet">

</head>

<body class="gray-bg">

    <div class="passwordBox animated fadeInDown">
        <div class="row">

            <div class="col-md-12">
                <div class="ibox-content">

                    <h2 class="font-bold">忘记密码</h2>

                    <p>
                        请输入您的电子邮件地址,密码将被重置，通过电子邮件发送给你。
                    </p>

                    <div class="row">

                        <div class="col-lg-12">
                            <form class="m-t" role="form" action="index.html">
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="邮箱地址" required="">
                                </div>

                                <button type="submit" class="btn btn-primary block full-width m-b">发送新密码</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="row">
            <div class="col-md-6">
                Example Company版权所有
            </div>
            <div class="col-md-6 text-right">
               <small>© 2014-2015</small>
            </div>
        </div>
    </div>

</body>

</html>