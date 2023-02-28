(function(){
    
    var leo = {
        //更改兴趣模块
        'changeInterestR':function(){
            var interestR = document.getElementsByClassName('interest-r')[0];
            var mask = document.getElementsByClassName('mask')[0];
            var intresting = document.getElementsByClassName('intresting')[0];
            var intrestingCategory = document.getElementsByClassName('intrestingCategory')[0].children;
            var allUl = document.getElementsByClassName('intrestingContent')[0].children;
            var allLi = document.getElementsByClassName('intrestingContent')[0].getElementsByTagName('li');
            var intrestingUl = document.getElementsByClassName('intresting-ul')[0];
            var allNumber = document.getElementById('allNumber');
            var chooseBtnNode = document.getElementsByClassName('chooseBtnNode')[0];
            var close = document.getElementsByClassName('close')[0];
            mask.style.opacity = '0';
            intresting.style.opacity = '0';
            mask.style.transition = '0.5s';
            intresting.style.transition = '0.5s';
            interestR.onclick = function(){
                setTimeout(function(){
                    mask.style.transition = '0s';
                    intresting.style.transition = '0s';
                },500);
                setTimeout(function(){
                    mask.style.opacity = '1';
                    intresting.style.opacity = '1';
                },0);
                mask.style.display = 'block';
                intresting.style.display = 'block';
            };
            for(var i = 0;i < intrestingCategory.length;i++){
                intrestingCategory[i].index = i;
                intrestingCategory[i].onclick = function(){
                    for(var k = 0;k < intrestingCategory.length;k++){
                        intrestingCategory[k].className = '';
                        allUl[k].className = '';
                    };
                    intrestingCategory[intrestingCategory.length-1].className = 'no';
                    this.className += ' active';
                    allUl[this.index].className = 'show';
                }
            };
            intrestingUl.onclick = function(){
                if(event.target.nodeName == 'IMG'){
                    for(var i = 0;i < allLi.length;i++){
                        if(allLi[i].innerText == event.target.parentNode.title){
                            allLi[i].className = '';
                            break;
                        }
                    };
                    intrestingUl.removeChild(event.target.parentNode);
                }
                allNumber.innerText = intrestingUl.children.length-1;
                intresting.style.marginTop = -intresting.offsetHeight/2 + 'px';
            };
            for(var i = 0;i < allLi.length;i++){
                allLi[i].onclick = function(){
                    if(this.className == 'active'){
                        this.className = '';
                        for(var p = 0;p < intrestingUl.children.length;p++){
                            if(this.innerText == intrestingUl.children[p].title){
                                intrestingUl.removeChild(intrestingUl.children[p]);
                                break;
                            }
                        }
                    }
                    else{
                        this.className = 'active';
                        var uLi = document.createElement('li');
                        uLi.title = this.innerText;
                        uLi.innerHTML = this.innerText+'<img src="image/colosd.gif">';
                        intrestingUl.appendChild(uLi);
                    }
                    allNumber.innerText = intrestingUl.children.length-1;
                    intresting.style.marginTop = -intresting.offsetHeight/2 + 'px';
                };
                allLi[i].onmousedown = function(){
                    return false;
                };
            };
            close.onclick = chooseBtnNode.onclick = function(){
                mask.style.transition = '0.5s';
                intresting.style.transition = '0.5s';
                setTimeout(function(){
                    mask.style.opacity = '0';
                    intresting.style.opacity = '0';
                },0);
                setTimeout(function(){
                    mask.style.display = 'none';
                    intresting.style.display = 'none';
                },500);
            };
            
        },
        //限时秒杀模块
        'timeBuy':function(){
            var miusaTopUl = document.getElementsByClassName('miusa-top-ul')[0];
            var miusaContent = document.getElementsByClassName('miusaContent')[0];
            var allUl = miusaContent.children;
            var miusaAllLi = miusaTopUl.children;
            for(var i = 0;i < miusaAllLi.length;i++){
                miusaAllLi[i].index = i;
                miusaAllLi[i].onmouseover = function(){
                    for(var k = 0;k < miusaAllLi.length;k++){
                        miusaAllLi[k].className = '';
                        allUl[k].style.display = 'none';
                    };
                    miusaAllLi[0].className = 'onest';
                    miusaAllLi[miusaAllLi.length-1].className = 'no';
                    this.className += ' active';
                    allUl[this.index].style.display = 'block';
                };
            };
        },
        //滚动事件
        'windowScroll':function(){
            var Top = document.getElementsByClassName('Top')[0];
            var topNodeCopy = document.getElementsByClassName('topNode-copy')[0];
            var windowShow = document.getElementsByClassName('windowShow')[0];
            var showT = document.getElementsByClassName('show-t')[0];
            var timer = null;
            window.onscroll = function(){
                if(document.documentElement.scrollTop>=1){
                    windowShow.style.display = 'block';
                }
                else{windowShow.style.display = 'none';}
                if(document.documentElement.scrollTop>=550){
                    Top.style.position = 'fixed';
                    topNodeCopy.style.display = 'block';
                }
                else{
                    Top.style.position = 'relative';
                    topNodeCopy.style.display = 'none';
                }
            };
            showT.onclick = function(){
                clearInterval(timer);
                timer = setInterval(function(){
                    if(document.documentElement.scrollTop<=0){
                        clearInterval(timer);
                        return;
                    }
                    document.documentElement.scrollTop = document.documentElement.scrollTop - 100;
                },0);
            };
        },

        //下载按钮触碰事件
        'downloadTouch':function(){
            var downBtn = document.getElementsByClassName('down')[0];
            var downloadAppShow = document.getElementsByClassName('downloadApp-show')[0];
            var timer = null;
            downBtn.onmouseover = function(){
                clearTimeout(timer);
                if(downloadAppShow.style.display == 'block') return;
                downloadAppShow.style.display = 'block';
                downloadAppShow.style.transform = 'scale(0.9)';
                downloadAppShow.style.transition = '0.2s';
                setTimeout(function(){
                    downloadAppShow.style.transform = 'scale(1)';
                },0);
            };
            downBtn.onmouseout = function(){
                clearTimeout(timer);
                timer = setTimeout(function(){
                    downloadAppShow.style.display = 'none';
                },100);
            };
            downloadAppShow.onmouseover = function(){
                clearTimeout(timer);
            };
            downloadAppShow.onmouseout = function(){
                clearTimeout(timer);
                timer = setTimeout(function(){
                    downloadAppShow.style.display = 'none';
                },100);
            };

        },

        //我的学习触碰事件
        'myTouch':function(){
            var myButton = document.getElementsByClassName('bannerTop-my')[0];
            var myContent = document.getElementsByClassName('bannerTop-my-content')[0];
            var timer = null;
            myButton.onmouseover = function(){
                clearTimeout(timer);
                if(myContent.style.display == 'block') return;
                myContent.style.display = 'block';
                myContent.style.transform = 'scale(0.9)';
                myContent.style.transition = '0.2s';
                setTimeout(function(){
                    myContent.style.transform = 'scale(1)';
                },0);  
            };
            myButton.onmouseout = function(){
                clearTimeout(timer);
                timer = setTimeout(function(){
                    myContent.style.display = 'none';
                },100);
            };
            myContent.onmouseover = function(){
                clearTimeout(timer);
            };
            myContent.onmouseout = function(){
                clearTimeout(timer);
                timer = setTimeout(function(){
                    myContent.style.display = 'none';
                },100);
            };
        },

        //用户头像触碰事件
        'userImageTouch':function(){
            var userImage = document.getElementsByClassName('user-image')[0];
            var userUl = document.getElementsByClassName('user-ul')[0];
            var myContent = document.getElementsByClassName('bannerTop-my-content')[0];
            var timer = null;
            userImage.onmouseover = function(){
                clearTimeout(timer);
                if(userUl.style.display == 'block') return;
                myContent.style.display = 'none';
                userUl.style.display = 'block';
                userUl.style.transform = 'scale(0.9)';
                userUl.style.transition = '0.2s';
                setTimeout(function(){
                    userUl.style.transform = 'scale(1)';
                },0);
            };
            userImage.onmouseout = function(){
                clearTimeout(timer);
                timer = setTimeout(function(){
                    userUl.style.display = 'none';
                },300);
            };
            userUl.onmouseover = function(){
                clearTimeout(timer);
            };
            userUl.onmouseout = function(){
                clearTimeout(timer);
                timer = setTimeout(function(){
                    userUl.style.display = 'none';
                },300);
            };
        },

        //搜索框事件
        'serchEvent':function(){
            var searchLeftChangeButton = document.getElementsByClassName('searchNodeLeft')[0];
            var searchLeftUl = document.getElementsByClassName('searchNodeLeft-ul')[0];
            var searchLeftUlAllNode = searchLeftUl.children;
            var searchShowOl = document.getElementsByClassName('searchNode-ol')[0];
            var searchInput = document.getElementsByClassName('searchNodeInput')[0];
            var searchNodeLeftTxet = document.getElementsByClassName('searchNodeLeftTxet')[0];
            var searchShowOlAllNode = searchShowOl.children;
            var context = {'k':['摄影','产品可视化','AI必学-Tensorflow','产品经理','AE'],
                           'w':['城市','滨洲医学院','51','edufancy','北京理工大学']
                        };

            
            window.onclick = function(){
                searchShowOl.style.display = 'none';
            };
            ToOlContent('k');
            function ToOlContent(text){
                searchShowOl.innerHTML = '<li class="first">热门搜索</li>';
                searchShowOlAllNode[0].onclick = function(){
                    event.cancelBubble = true;
                };
                for(var i = 0;i<context[text].length;i++){
                    var oLi = document.createElement('li');
                    oLi.innerHTML = '<a href="#">'+context[text][i]+'</a>';
                    searchShowOl.appendChild(oLi);
                };
                for(var i = 1;i<searchShowOlAllNode.length;i++){
                    searchShowOlAllNode[i].onclick = function(){
                        event.cancelBubble = true;
                        searchShowOl.style.display = 'none';
                    };
                };
            };
            
            
            for(var i = 0;i<searchLeftUlAllNode.length;i++){
                searchLeftUlAllNode[i].onclick = function(){
                    event.cancelBubble = true;
                    for(var i = 0;i<searchLeftUlAllNode.length;i++){
                        searchLeftUlAllNode[i].className = '';
                    };
                    searchNodeLeftTxet.innerHTML = this.innerHTML;
                    this.className = 'active';
                    searchLeftUl.style.display = 'none';
                    searchShowOl.style.display = 'block';
                    OlShow();

                    if(this.innerHTML == '网校'){
                        searchInput.placeholder = '搜索网校';
                        ToOlContent('w')
                    }
                    else{
                        searchInput.placeholder = '零基础学JavaScript';
                        ToOlContent('k')
                    }
                };
            };
            searchLeftChangeButton.onmouseover = function(){
                if(event.target.nodeName == 'DIV' || event.target.nodeName == 'SPAN'){
                    searchLeftChangeButton.className = 'searchNodeLeft active';
                }
                else{
                    searchLeftChangeButton.className = 'searchNodeLeft';
                }
            };
            searchLeftChangeButton.onmouseout = function(){
                searchLeftChangeButton.className = 'searchNodeLeft';
            };
            searchLeftChangeButton.onmouseenter = function(){
                searchLeftUl.style.display = 'block';
                searchShowOl.style.display = 'none';
            };
            searchLeftChangeButton.onmouseleave = function(){
                searchLeftUl.style.display = 'none';
            };
            function OlShow(){
                searchShowOl.style.transition = '0.7s';
                searchShowOl.style.opacity = '0';
                searchShowOl.style.display = 'block';
                setTimeout(function(){
                    searchShowOl.style.opacity = '1';
                },0);
            }
            searchInput.onclick = function(){
                OlShow();
                event.cancelBubble = true;
            };
            //searchInput.onfocus = OlShow;
        },

        //名师公开课移动事件
        'openShow':function(){
            var leftBtn = document.getElementsByClassName('cardLeft')[0];
            var rightBtn = document.getElementsByClassName('cardRight')[0];
            var openUl = document.getElementsByClassName('userCard')[0];
            rightBtn.style.display = 'none';
            leftBtn.onclick = function(){
                this.style.display = 'none';
                rightBtn.style.display = 'block';
                openUl.style.left = '-368px';
            };
            rightBtn.onclick = function(){
                this.style.display = 'none';
                leftBtn.style.display = 'block';
                openUl.style.left = '10px';
            };
        },


        //顶部下导航二级菜单
        "bannerShow":function(){
            var allLi = document.getElementsByClassName("banner-a");
            var allShowOl = document.getElementsByClassName('active-ol');
            var banner = document.getElementById('banner');
            var rightOl = document.getElementsByClassName('right-ol')[0];
            for(var i = 0;i < allLi.length;i++){
                allLi[i].onmouseover = function(){
                    for(var i = 0;i<allShowOl.length;i++){
                        allShowOl[i].style.display="none";
                    }
                    if(this.parentNode.getElementsByClassName('active-ol')[0]){
                        this.parentNode.getElementsByClassName('active-ol')[0].style.display = 'block';
                    }
                }
            }
            banner.onmouseleave = function(){
                for(var i = 0;i<allShowOl.length;i++){
                    allShowOl[i].style.display="none";
                };
            };
            rightOl.onmouseenter = function(){
                for(var i = 0;i<allShowOl.length;i++){
                    allShowOl[i].style.display="none";
                };
            };
        },

        //轮播图内容
        "silder":function(){
            var timer = null;
            var allSilderButton = document.getElementsByClassName('sliderContent-button')[0];
            var allLi=allSilderButton.children;
            var allSliderContent=document.getElementsByClassName("sliderContent-outerNode-UlNode")[0].children;
            var sliderBG=document.getElementsByClassName("sliderContent")[0];
            var colorArr = ['#f15c5a','#f5a52c','#f9a916','#2b409b','#0096ee','#283042','#f64b3a'];
            for(var i =0;i < allLi.length;i++){
                allLi[i].index=i;
                allLi[i].onmouseover=function(){
                    clearInterval(timer);
                    timer = setTimeout(function(){
                        for(var i=0;i<allLi.length;i++){
                            allSliderContent[i].style.display="none";
                            if(allLi[i].className.indexOf("first")!=-1){
                                allLi[i].className="first";
                            }
                            else{
                                allLi[i].className="";
                            }
                        }
                        sliderBG.style.background=colorArr[this.index];
                        allSliderContent[this.index].style.display="block";
                        this.className+= " active";
                    }.bind(this),500)
                }
            }
        }
    };
    //更改兴趣模块
    leo.changeInterestR();

    //限时秒杀模块
    leo.timeBuy();

    //滚动事件
    leo.windowScroll();

    //下载按钮触碰事件
    leo.downloadTouch();

    //我的学习触碰事件
    leo.myTouch();

    //用户头像触碰事件
    leo.userImageTouch();

    //搜索框事件
    leo.serchEvent();

    //轮播图函数
    leo.silder();

    //顶部下导航二级菜单
    leo.bannerShow();

    //名师公开课移动事件
    leo.openShow();
})();