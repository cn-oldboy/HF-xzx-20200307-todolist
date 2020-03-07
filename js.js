
        // 初始阶段
        let  n1= $(".list1>ul").children().length;
        let  n2= $(".list2>ul").children().length;
        init()
        function init(){
            $('.list1num').html(n1)
            $('.list2num').html(n2)
        }

       // 输入框新增
        function newlitext(input) {
            let  str=''
            str = `
            <li>
                <p><input type='checkbox' value='${input}'>${input}</p><button>删除</button>
            </li>
            `
            return str
        }
        // 移入的新增
        function shiftin(input) {
            let  str=''
            str = `
            <li>
                <p><input type='checkbox'  checked  value='${input}'>${input}</p><button>删除</button>
            </li>
            `
            return str
        }




        //1.监听输入框的内容，生成一个新的list
        $('.right>input').on('change', function () {
            let newtext = $('.right input').val().trim();
            let newli = newlitext(newtext);
            $('.list1>ul').append(newli);
            n1=parseInt($('.list1num').html())+1
            $('.list1num').html(n1)
            
        });

        // 2.监听list1选择事件,将选择的移入到已完成,写成一个函数

        $(".list1 ul").on('click','li>p',function() {
        　　console.log(this)
            $(this).parent().remove()
            // 获取值当前元素的value
            let  str2=$('input',$(this)).val()
            str2= shiftin(str2);
            $('.list2>ul').append(str2);
            n1= $(".list1>ul").children().length
            n2= $(".list2>ul").children().length
            init()
        });

        // 3.监听list2选择事件，将选择移入到正在进行
        $(".list2 ul").on('click','li p',function() {
        　　console.log(this)
            $(this).parent().remove()
            // 获取值当前元素的value
            let  str3=$('input',$(this)).val()
            console.log(str3)
            str3= newlitext(str3);
            $('.list1>ul').append(str3);
            n1= $(".list1>ul").children().length
            n2= $(".list2>ul").children().length
            init()
        });


        // 删除指定的信息

            $('.container').on('click','button:not(.clear)',function(){
                $(this).parent().remove()
                n1= $(".list1>ul").children().length
                n2= $(".list2>ul").children().length
                init()
            })
        // 删除所有信息

        $('.clear').on('click',function(){
            $('button:not(.clear)').parent().remove()
            n1= $(".list1>ul").children().length
            n2= $(".list2>ul").children().length
            init()
            })

