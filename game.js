
open = false;
doc = document;
cell = document.getElementsByClassName( 'listCon' );
cll1 = cell[0];
cll2 = cell[1];
cll3 = cell[2];
var opit = 0;
var upit = 0;
cl1Bol = false
cl2Bol = false
cl3Bol = false
function mnuNavi(evt) {
    if ( open ) {
        if ( evt === 40 ) {

            var a1 = document.getElementById( 'h31' );
            var a2 = document.getElementById( 'h32' );
            var a3 = document.getElementById( 'h33' );

            if ( cl3Bol === true ) {
                cl1Bol = true
                cl2Bol = false
                cl3Bol = false
                console.log( 'unten' );
                a1.style.color = 'black';
                cll1.style.borderRadius = '12px';
                cll1.style.transition = 'all ease-in-out 500ms';
                cll1.style.backgroundColor = 'rgba(211, 211, 211,0.7)';
                // DEFAULT
                a2.style.color = 'white';
                cll2.style.backgroundColor = 'rgba(120,120,120,0)';

                a3.style.color = 'white';
                cll3.style.backgroundColor = 'rgba(120,120,120,0)';

                opit++;
            } else if ( cl1Bol === true ) {
                cl1Bol = false
                cl2Bol = true
                cl3Bol = false

                // LIST POINT 2
                a2.style.color = 'black';
                cll2.style.borderRadius = '12px';
                cll2.style.transition = 'all ease-in-out 500ms';
                cll2.style.backgroundColor = 'rgba(211, 211, 211,0.7)';
                // DEFAULT
                a1.style.color = 'white';
                cll1.style.backgroundColor = 'rgba(120,120,120,0)';

                a3.style.color = 'white';
                cll3.style.backgroundColor = 'rgba(120,120,120,0)';

                opit++;
            } else if ( cl2Bol === true ) {
                cl1Bol = false
                cl2Bol = false
                cl3Bol = true

                // LIST POINT 3
                a3.style.color = 'black';
                cll3.style.borderRadius = '12px';
                cll3.style.transition = 'all ease-in-out 500ms';
                cll3.style.backgroundColor = 'rgba(211, 211, 211,0.7)';
                // DEFAULT
                a2.style.color = 'white';
                cll2.style.backgroundColor = 'rgba(120,120,120,0)';

                a1.style.color = 'white';
                cll1.style.backgroundColor = 'rgba(120,120,120,0)';

                opit++;
            } else {
                cl1Bol = true
                cl2Bol = false
                cl3Bol = false

                a1.style.color = 'black';
                cll1.style.borderRadius = '12px';
                cll1.style.transition = 'all ease-in-out 500ms';
                cll1.style.backgroundColor = 'rgba(211, 211, 211,0.7)';
                // DEFAULT
                a2.style.color = 'white';
                cll2.style.backgroundColor = 'rgba(120,120,120,0)';

                a3.style.color = 'white';
                cll3.style.backgroundColor = 'rgba(120,120,120,0)';

                opit = 1;
            }



        } else if ( evt === 38 ) {
            console.log( 'oben' );
            var a1 = document.getElementById( 'h31' );
            var a2 = document.getElementById( 'h32' );
            var a3 = document.getElementById( 'h33' );

            if ( cl1Bol === true ) {
                a3.style.color = 'black';
                cll3.style.borderRadius = '12px';
                cll3.style.transition = 'all ease-in-out 500ms';
                cll3.style.backgroundColor = 'rgba(211, 211, 211,0.7)';
                // DEFAULT
                a2.style.color = 'white';
                cll2.style.backgroundColor = 'rgba(120,120,120,0)';

                a1.style.color = 'white';
                cll1.style.backgroundColor = 'rgba(120,120,120,0)';

                cl1Bol = false
                cl2Bol = false
                cl3Bol = true

            } else if ( cl2Bol === true ) {
                a1.style.color = 'black';
                cll1.style.borderRadius = '12px';
                cll1.style.transition = 'all ease-in-out 500ms';
                cll1.style.backgroundColor = 'rgba(211, 211, 211,0.7)';
                // DEFAULT
                a3.style.color = 'white';
                cll3.style.backgroundColor = 'rgba(120,120,120,0)';

                a2.style.color = 'white';
                cll2.style.backgroundColor = 'rgba(120,120,120,0)';

                cl1Bol = true
                cl2Bol = false
                cl3Bol = false


            } else if ( cl3Bol === true ) {
                a2.style.color = 'black';
                cll2.style.borderRadius = '12px';
                cll2.style.transition = 'all ease-in-out 500ms';
                cll2.style.backgroundColor = 'rgba(211, 211, 211,0.7)';
                // DEFAULT
                a3.style.color = 'white';
                cll3.style.backgroundColor = 'rgba(120,120,120,0)';

                a1.style.color = 'white';
                cll1.style.backgroundColor = 'rgba(120,120,120,0)';

                cl1Bol = false
                cl2Bol = true
                cl3Bol = false



            }
            
      
        } else if ( evt === 13 ) {
            var a1 = document.getElementById( 'h31' );
            var a2 = document.getElementById( 'h32' );
            var a3 = document.getElementById( 'h33' );


            if ( cl1Bol === true ) {
                console.log('any')
            } else if ( cl2Bol === true ) {
                console.log( 'any' )
            } else if ( cl3Bol === true ) {
                console.log( 'any' )
            }






            console.log('enter');
            
        
        }
        
    }
}


    cll1.addEventListener( 'mouseover',function () {
        var a1 = document.getElementById( 'h31' );
        a1.style.color = 'black';
    } );
    cll1.addEventListener( 'mouseleave',function () {
        var a1 = document.getElementById( 'h31' );
        a1.style.color = 'whitesmoke';
    } );
    cll2.addEventListener( 'mouseover',function () {
        var a1 = document.getElementById( 'h32' );
        a1.style.color = 'black';
    } );
    cll2.addEventListener( 'mouseleave',function () {
        var a1 = document.getElementById( 'h32' );
        a1.style.color = 'whitesmoke';
    } );
    cll3.addEventListener( 'mouseover',function () {
        var a1 = document.getElementById( 'h33' );
        a1.style.color = 'black';
    } );
    cll3.addEventListener( 'mouseleave',function () {
        var a1 = document.getElementById( 'h33' );
        a1.style.color = 'whitesmoke';
    } );

    setTimeout( doc.onload = function () {
        var mnu = document.getElementById( 'slideCon' );
        var cell = document.getElementsByTagName( 'h3' );
        var cell1 = cell[0];
        var cell2 = cell[1];
        var cell3 = cell[2];
        cell1.style.visibility = 'hidden';
        cell2.style.visibility = 'hidden';
        cell3.style.visibility = 'hidden';
        mnu.style.visibility = 'hidden';
        doc.getElementById( 'mnuBtn' ).click();
    },1 );

var yes = true;

        function sliderIN() {
            if ( yes === false ) {
               console.log('any')
            } else {
            var mnu = document.getElementById( 'slideCon' );
            var cell = document.getElementsByTagName( 'h3' );
            var i = mnu.offsetWidth;
            var cell1 = cell[0];
            var cell2 = cell[1];
            var cell3 = cell[2];
            if ( i < 30 ) {
                sliderOUT();
            }
            if ( i > 160 ) {
                cell1.style.visibility = 'hidden';
                cell2.style.visibility = 'hidden';
                cell3.style.visibility = 'hidden';
                yes = false;

                var interv = setInterval( function () {
                    open = false;
                    if ( i < 0 ) {
                        
                        mnu.style.visibility = 'hidden';
                        clearInterval( interv );
                        yes = true;
                        
                    } else {
                        mnu.style.width = i + 'px';
                        i -= 4;
                    }
                },1 );
            }
            }
        } 

    function sliderOUT() {
        if ( yes === false ) {
          console.log('thkh')
        } else {
        var mnu = document.getElementById( 'slideCon' );
        var cell = document.getElementsByTagName( 'h3' );
        i = mnu.offsetWidth;
        var cell1 = cell[0];
        var cell2 = cell[1];
        var cell3 = cell[2];
        if ( i > 160 ) {
            sliderIN();
        }
        if ( i < 30 ) {
            yes = false;
            var interv = setInterval( function () {
                open = true;
                if ( i > 170 ) {
                    cell1.style.visibility = 'visible';
                    cell2.style.visibility = 'visible';
                    cell3.style.visibility = 'visible';
                    clearInterval( interv );
                    yes = true;
                } else {
                    mnu.style.visibility = 'visible';
                    mnu.style.width = i + 'px';
                    i += 4;
                }
            },1 );
        }
    }
    }




var mnuBtn =  document.getElementById( 'mnuBtn' )
mnuBtn.addEventListener( 'click',function () { sliderIN();} );

canvas = document.getElementById( 'canvas' );
ctx = canvas.getContext( '2d' );
canvas.width = 1000;
canvas.height = 420;
canvas.style.marginLeft = "20px";
dx = 0;
bol = true;
jmpfrc = 50;
grvity = 0.1;
jmpBol = false;
keys = [32,65,68,83,87,37,39,40,38,27,13];
speed = 4;
kyRight = false;
kyLeft = false;
kyUp = false;
kyDwn = false;
no = true;
grounded = true;
jp = false;
g = 0;
open = Boolean;
//____________________Player
itc = true;
dont = true;
x = 375;
y = 328;
ausgl = 12;
ausgl1 = 12;
leftSh = 0;

leftFt = 0;

leftHd = 0;

leftPii = 1.009;
rightPii = 0.94;
leftHx = 0;

leftY = 0;
//3
leftEye = 0;
//17
leftR = 0;
//3
leftBcY = 0;
anmi1 = 0;
anmi = 0;

time = 915100;
vw = 0;
oriY = 326;
leftEN = 4;
ico = 0;
newRun = false;
newRunY = false;
ix = 50;
iy = 150;

document.addEventListener( 'keydown',function ( event ) {
    keyode = event.keyCode;
    if ( keys.includes( keyode ) ) {
        if ( keyode === 39 || keyode === 68 ) {
            // nach rechts bewegen
            kyRight = true;
            dont = false
            leftEN = 4;
        } else if ( keyode === 37 || keyode === 65 ) {
            // nach links bewegen
            kyLeft = true;
            dont = false
            leftEN = -4;
        } else if ( keyode === 83 || keyode === 40 ) {
            if ( open === true ) {
                mnuNavi( keyode )
            } else {
                kyDwn = true;
            }
        } else if ( keyode === 32 || keyode === 38 || keyode === 87 ) {
            if ( open === true && keyode === 38) {
                mnuNavi( keyode )
            } else {
                jp = true;
            }
            // JUMP KEY
        } else if ( keyode === 27 ) {
            if ( open ) {
                cll1.style.transition = '';
                cll2.style.transition = '';
                cll3.style.transition = '';
                sliderIN();
            } else if ( open === false ) {
                sliderOUT();
            }
        } else if ( keyode === 13 ) {
            if ( open === true ) {
                mnuNavi(keyode);
            }
            
        }
    } else {
        console.log( 'NO_match' );
    }
} );
document.addEventListener( 'keyup',function ( event ) {
    var key = event.keyCode;
    if ( key === 39 || key === 68 ) {
        kyRight = false;
        dont = true;
    } else if ( key === 37 || key === 65 ) {
        kyLeft = false;
        dont = true;
    } else if ( key === 38 || key === 87 ) {
        jp = false;
    } else if ( key === 83 || key === 40 ) {
        kyDwn = false;
    } else if ( key === 32 ) {
        jp = false;
    }
} );




deX = 0;
landON = false;
var w;
var h;
var deadx1= false;
var deady1 = false;
var deadx2 = false;
var deady2 = false;
var dead = false
var counter = 0;
ivn = 0;
var it = 1 , g = 1; 
class Player {
    constructor( x,y,w,h ) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.score()
        this.checkDead()       
        
        if ( kyRight && this.x < 940 ) {
            this.x = this.right();
            ausgl = -1;
            leftSh = 0;
            leftFt = 0;
            leftHd = 0;
            rightPii = 0.94;
            leftHx = 0;
            leftY = 0;
            leftEye = 0;
            leftR = 0;
            leftBcY = 0;
            vw = 4;
        } else {
            ausgl = 0;
            vw = 2;
        }
        if ( kyLeft && this.x > 50 ) {
            this.x = this.left();
            ausgl1 = 1;
            leftSh = 10;
            leftFt = 10;
            leftHd = 3;
            rightPii = leftPii;
            leftHx = 5;
            leftY = 3;
            leftEye = 17;
            leftR = 1;
            leftBcY = 4;
            vw = 2;
        } else {
            ausgl1 = 0;
            vw = 0;
        }

        if ( kyUp && this.y > 0 ) {
            this.y = this.up();
        }
        if ( kyDwn && this.y < ( 368 - 40 ) ) {
            this.y = this.down();
        }
        if ( jp && no ) {
            no = false;
            this.jmp();
        }
        if ( grounded === false ) {
            this.gravity();
        }

        if ( ( ( this.x > qx ) && ( this.x + this.w ) < qx + qw ) && ( ( this.y + this.h + 10 ) < qy )  ) {console.log('test')}
        
        
        
        this.draw();
    }
    checkDead() {






        if ( ( ( this.x - or) - ( ox ) > 0 || ( ( this.x + 10 ) - ( ox - or ) ) < -20 ) ) {
            deadx1 = false;
        } else {
            deadx1 = true;
        }


        if ( ( ( this.y - 80 ) - ( oy - or ) ) > 0 || ( ( this.y + (this.h )) - ( oy + or ) ) < -80 ) {
            deady1 = false
        } else {
            deady1 = true
        }

        if ( deady1 && deadx1 ) {
            this.dead();
        }

        



        if ( ( ( this.x - or1) - ( ox1 ) > 0 || ( ( this.x + 15 ) - ( ox1 - or1 ) ) < -20 ) ) {
            deadx2 = false;
        } else {
            deadx2 = true;
        }

        if ( ( ( this.y - 80 ) - ( oy1 - or1 ) ) > 0 || ( ( this.y + ( this.h )) - ( oy1 + or1 ) ) < -80 ) {
            deady2 = false
        } else {
            deady2 = true
        }


        if ( deady2 && deadx2 ) {
            this.dead();
        } 
       
    }
    score() {        
        if ( dead  && ivn === 0) {
          console.log( Math.round( counter ))
            document.getElementById( 'scre' ).innerText = Math.round( counter );
            ivn++;
        } else if (dead === false){
          counter += 0.05;
          document.getElementById( 'scre' ).innerText = Math.round(counter) ;
           
        }
    }
    dead() {
       dead = true;
    }
    jmp() {
        
        var gi = 1;
        var t = 0.009900990099009901;
        var xy = y
        let inter = setInterval( () => {
            if ( (xy - 150) > this.y  ) {
                clearInterval( inter );
                grounded = false;
                this.gravity();
            } else {
                this.y -= (  ( 3.5 - gi ) );
               
                gi += 0.02;
                y = this.y;
                if ( gi < 0.2 ) {
                    gi = 0.1
                }
            }
        },1);
    }
    gravity() {
 
        this.y = Math.round( this.y );
        if (  this.y >  315  ) {
            //default ground is 328
            grounded = true;
            no = true;
            it = 1
            g = 1
        } else {
            this.y += (it);
            it += .75;
                      
            y = this.y
        }
    }
    right() {
        this.x = this.x + ( speed + .8 );
        newRun = false
        newRunY = false
        return this.x;
    }
    left() {
        this.x = this.x - ( speed + .8 );
        newRun = false
        newRunY = false
        return this.x;
    }
    up() {
        this.y = this.y - ( speed + .5 );
        newRun = false
        newRunY = false
        return this.y;
    }
    down() {
        this.y = this.y + ( speed + .5 );
        return this.y;
    }
    draw() {
        if ( dont ) {

            ctx.beginPath();
            ctx.rect( this.x + deX,( this.y - 15 ),this.w - 4,this.h + 35 );
            // body
            ctx.fillStyle = '#274f45';
            ctx.fill();
            ctx.closePath();
        }
        ctx.beginPath();
        ctx.moveTo( 0,380 );
        ctx.lineTo( 1000,380 );
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
        /*shirt*/
        if ( dont ) {
            ctx.beginPath();
            ctx.rect( ( ( ( ( this.x - 5 ) + leftSh ) + ausgl ) - ausgl1 ) + deX,this.y - 10, this.w - 2,32 );
            //shirt 10
            ctx.fillStyle = "#5b5959";
            ctx.fill();
            ctx.closePath();
        }
        if ( dont ) {
            /*shoes b*/
            ctx.beginPath();
            ctx.rect( ( ( ( ( this.x - leftFt ) ) + ausgl ) - ausgl1 ) + deX,( this.y + 40 ),this.w + 6, 10 );
            //shoes behind
            ctx.fillStyle = "#040a08";
            ctx.fill();
            ctx.closePath();

            /*shoes  */
            ctx.beginPath();
            ctx.rect( ( ( ( ( this.x - leftFt ) ) + ausgl ) - ausgl1 ) + deX,( this.y + 40 ),this.w + 6,10 );
            //shoes 19
            ctx.fillStyle = "#404244";
            ctx.fill();
            ctx.closePath();
        }
        if ( dont ) {
            /* head2 */
            ctx.beginPath();
            ctx.arc( ( ( ( ( this.x + 7 ) + deX ) + leftHd ) + ausgl ) - ausgl1, this.y - 25 , /*r*/
                17.5,2.7 * Math.PI,true );
            //head2
            ctx.fillStyle = "#ffddb7";
            ctx.fill();
            ctx.closePath();
            /* basecap */
            ctx.beginPath();
            ctx.arc( ( ( ( ( this.x + 4 ) + deX ) + leftHx ) + ausgl ) - ausgl1,( ( this.y - 33 ) + leftBcY ) - leftY, /*r*/
                20 + leftR,rightPii * Math.PI,false );
            
            ctx.fillStyle = "#274c7a";
            ctx.fill();
            ctx.closePath();
            /* EYE */
            ctx.beginPath();
            ctx.arc( ( ( ( ( this.x + 17 ) - leftEye ) + ausgl ) - ausgl1 ) + deX,this.y - 24.7, /*r*/
                6,2 * Math.PI,false );
            //eye leftEye=17
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        }
        h = this.h;
        w = this.w;
        x = this.x;
        y = this.y;
    }
}
t = true;

class Enemy {
    constructor( ix,iy,ir,any,pi ) {
        this.ix = ix;
        this.iy = iy;
        this.ir = ir;
        this.pi = pi;
        this.any = any;
        Math.round( this.ix );
        Math.round( this.x );
        Math.round( this.iy );
        ix = this.ix
        iy = this.iy


        
        
        this.search();
        this.flight();
        this.draw();
    }

    flight() {
        if ( newRunY && newRun ) {
            ico = 0;
            if ( this.iy > 240 && t ) {
                this.iy -= 0.2;
                iy = this.iy;
            } else if ( this.iy < 240 ) {
                t = false;
            }
            if ( this.iy < 259 && t === false ) {
                this.iy += 0.2;
                iy = this.iy;
            } else {
                t = true;
            }
        } else {
            this.search()
        }
    }

    search() {
        // searcher x
        if ( newRun === false || newRunY === false ) {
            if ( this.ix < ( x - 60 ) ) {
                this.ix += ( speed - 2.5 );
                newRun = false;
            } else if ( this.ix > ( x - 55 ) ) {
                this.ix -= ( speed - 2.5 )
                newRun = false;
            } else {
                newRun = true;
            }
            // searcher y
            if ( this.iy > ( y - 65 ) ) {
                this.iy -= ( speed - 3.4 );
                newRunY = false;
            } else if ( this.iy < ( y - 70 ) ) {
                this.iy += ( speed - 3.4 );
                ico++;
                newRunY = false;
            } else {
                if ( newRun ) {
                    newRunY = true;
                    this.flight();
                }
            }
        } else {
            this.flight();
        }
    }
    draw() {
        ctx.beginPath();
        ctx.arc( this.ix,this.iy,this.ir,this.any,this.pi );
        ctx.strokeStyle = '#175ac6';
        ctx.fillStyle = '#61b7e6';
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        //eye 
        ctx.beginPath();
        ctx.arc( ( this.ix + leftEN ),( this.iy - 1 ),4,8,0 * Math.PI,true );
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
        ix = this.ix;
        iy = this.iy;
    }
}
dif = 0;
first = true;
obsX = 1000
obsY = 50
obsW = 100
rm = 0;
obsH = 50
deltaX1 = 0;
deltaX2 = 0;
deltaX3 = 0;
ow0 = 50;
//________________Level-Object
ox = 50;
oy = 50;
or = 35;
pi = 2 * Math.PI;
oBol = false;
dox = 4;
doy = 4;
ox1 = 950;
oy1 = 420;
or1 = 15;
dox1 = 4;
doy1 = 4;
hiok = 0;
OBSP = 4;
Xfaktor = 0;
Yfaktor = 0;
Xfaktor1 = 0;
Yfaktor1 = 0;
ow = 70;
iqx2 = 70;
rota = 0;
var color="white";
var color1 = "white";
class objctBck {
    constructor( ox,oy,or,pi,oBol,ox1,oy1,or1 ) {
        this.ox = ox;
        this.oy = oy;
        this.pi = pi;
        this.or = or;
        this.oBol = oBol;
        this.ox1 = ox1;
        this.oy1 = oy1;
        this.or1 = or1;
        if ( hiok < 200 ) {
            var uio = this.rdm( 1,2 )
            hiok++;
        }
        color1 = this.rdmColor( color1,this.ox1,this.oy1,this.or1 )

        color = this.rdmColor(color,this.ox,this.oy,this.or)
        or -= 10;
        or1 -= 10;
        this.or = or;
        this.or1 = or1;
        this.spawn();
        this.draw();
    }
    spawn() {
        if ( ( this.ox > this.ox1 ) && ( this.oy > this.oy1 ) ) {
            if ( ( this.ox - this.ox1 ) < this.or1 + this.or && ( this.oy - this.oy1 ) < this.or1 + this.or ) {
              console.log( 'A' )
                if ( dox === 4 && doy === 4 ) {
                    dox = -4;
                    doy = 4
                    console.log( 'A1' )
                }
                if ( dox === -4 && doy === -4 ) {
                    dox = 4;
                    doy = -4
                    console.log( 'A2' )
                }
                if ( dox === -4 && doy === 4 ) {
                    dox = 4;
                    doy = 4
                    console.log( 'A3' )
                }
                if ( dox === 4 && doy === -4 ) {
                    dox = -4;
                    doy = -4
                    console.log( 'A4' )
                }

                if ( dox1 === 4 && doy1 === 4 ) {
                    dox1 = 4;
                    doy1 = -4
                }
                if ( dox1 === -4 && doy1 === -4 ) {
                    dox1 = -4;
                    doy1 = 4
                }
                if ( dox1 === -4 && doy1 === 4 ) {
                    dox1 = -4;
                    doy1 = -4
                }
                if ( dox1 === 4 && doy1 === -4 ) {
                    dox1 = 4;
                    doy1 = 4
                }
            }

        }
        if ( ( this.ox < this.ox1 ) && ( this.oy < this.oy1 ) ) {
            if ( ( this.ox1 - this.ox ) < this.or1 + this.or && ( this.oy1 - this.oy ) < this.or1 + this.or ) {
               console.log( 'B' )
                if ( dox === 4 && doy === 4 ) {
                    dox = -4;
                    doy = -4
                    dox1 = 4;
                    doy1 = 4;
                    console.log( 'B1' )
                }
                if ( dox === -4 && doy === -4 ) {
                    dox = 4;
                    doy = 4
                    dox1 = -4;
                    doy1 = -4;
                    console.log( 'B2' )
                }
                if ( dox === -4 && doy === 4 ) {
                    dox = 4;
                    doy = -4
                    dox1 = -4;
                    doy1 = 4;
                    console.log( 'B3' )
                }
                if ( dox === 4 && doy === -4 ) {
                    dox = -4;
                    doy = -4
                    dox1 = 4;
                    doy1 = -4;
                    console.log( 'B4' )
                }
               if ( dox1 === 4 && doy1 === 4 ) {
                    dox1 = 4;
                    doy1 = 4
                    dox = -4;
                    doy = -4

                }
                if ( dox1 === -4 && doy1 === -4 ) {
                    dox1 = 4;
                    doy1 = -4
                    dox = -4;
                    doy = -4
                }
                if ( dox1 === -4 && doy1 === 4 ) {
                    dox1 = -4;
                    doy1 = -4
                    dox = 4;
                    doy = -4
                }
                if ( dox1 === 4 && doy1 === -4 ) {
                    dox1 = 4;
                    doy1 = 4
                    dox = -4;
                    doy = -4
                }

            }

        }
        if ( ( this.ox < this.ox1 ) && ( this.oy > this.oy1 ) ) {
            if ( ( this.ox1 - this.ox ) < this.or1 + this.or && ( this.oy - this.oy1 ) < this.or1 + this.or ) {
                console.log( 'C' )
                if ( dox === 4 && doy === 4 ) {
                    dox = -4;
                    doy = -4;
                    console.log( 'C1' )
                }
                if ( dox === -4 && doy === -4 ) {
                    dox = 4;
                    doy = -4
                    console.log( 'C2' )
                }
                if ( dox === -4 && doy === 4 ) {
                    dox = 4;
                    doy = 4
                    console.log( 'C3' )
                }
                if ( dox === 4 && doy === -4 ) {
                    dox = -4;
                    doy = -4
                    console.log( 'C4' )
                }

                if ( dox1 === 4 && doy1 === 4 ) {
                    dox1 = 4;
                    doy1 = 4
                }
                if ( dox1 === -4 && doy1 === -4 ) {
                    dox1 = -4;
                    doy1 = -4
                }
                if ( dox1 === -4 && doy1 === 4 ) {
                    dox1 = -4;
                    doy1 = 4
                }
                if ( dox1 === 4 && doy1 === -4 ) {
                    dox1 = 4;
                    doy1 = -4
                }

            }

        }
        if ( ( this.ox > this.ox1 ) && ( this.oy > this.oy1 ) ) {
            if ( ( this.ox - this.ox1 ) < this.or1 + this.or && ( this.oy - this.oy1 ) < this.or1 + this.or ) {
               console.log( 'D' )
                if ( dox === 4 && doy === 4 ) {
                    dox = -4;
                    doy = -4
                }
                if ( dox === -4 && doy === -4 ) {
                    dox = 4;
                    doy = 4
                }
                if ( dox === -4 && doy === 4 ) {
                    dox = 4;
                    doy = -4
                }
                if ( dox === 4 && doy === -4 ) {
                    dox = -4;
                    doy = 4
                }

                if ( dox1 === 4 && doy1 === 4 ) {
                    dox1 = -4;
                    doy1 = -4
                }
                if ( dox1 === -4 && doy1 === -4 ) {
                    dox1 = 4;
                    doy1 = -4
                }
                if ( dox1 === -4 && doy1 === 4 ) {
                    dox1 = -4;
                    doy1 = 4
                }
                if ( dox1 === 4 && doy1 === -4 ) {
                    dox1 = 4;
                    doy1 = 4
                }
            }

        }
        dox = this.rturnX( this.ox,this.or,dox )
        doy = this.rturnY( this.oy,this.or,doy )
        dox1 = this.rturnX( this.ox1,this.or1,dox1 )
        doy1 = this.rturnY( this.oy1,this.or1,doy1 )


        var x1 = 0;
        var x = 0;
        var y = 0;
        var y1 = 0;

        if ( doy1 > 0 ) { y1 = 3 } else if ( doy1 < 0 ) { y1 = -3 }
        if ( dox1 > 0 ) { x1 = 3 } else if ( dox1 < 0 ) { x1 = -3 }
        if ( dox > 0 ) { y = 3 } else if ( dox < 0 ) { y = -3 }
        if ( doy > 0 ) { y = 3 } else if ( doy < 0 ) {y = -3}
        this.ox += dox + x + Xfaktor ;
        this.oy += doy + y + Yfaktor ;
        this.ox1 += dox1 + x1 + Xfaktor1 ;
        this.oy1 += doy1 + y1 + Yfaktor1 ;
        ox1 = this.ox1;
        oy1 = this.oy1;
        ox = this.ox;
        oy = this.oy;

        Xfaktor = Math.round(this.fktrX(Xfaktor,this.ox,this.or))
        Yfaktor = Math.round( this.fktrY( Yfaktor,this.ox,this.or ) )

        Xfaktor1 = Math.round( this.fktrX( Xfaktor1,this.ox1,this.or1 ) )
        Yfaktor1 = Math.round( this.fktrY( Yfaktor1,this.oy1,this.or1 ) )
    }
    fktrX( faktor,x,r ) {
        if ( x > canvas.width - r || x < 0 + r ) {
            var x = Math.round( this.rdm( -2,2 ) )
            return x
        } else {
            return faktor;
        }
    }
    fktrY( faktor,y,r ) {
        if ( y > canvas.width - r || y < 0 + r ) {
            var y = Math.round(this.rdm(-2,2))
            return y
        } else {
            return faktor;
        }

    }

    rdmColor( color,x,y,r ) {
        if ( y > canvas.width - r || y < 0 + r || x > canvas.width - r || x < 0 + r ) {
            var r = Math.round( this.rdm( 0,255 ) )
            var g = Math.round( this.rdm( 50,255 ) )
            var b = Math.round( this.rdm( 50,255 ) )
            return color = 'rgb(0,' + g + ',' + b + ')'
            
        } else {
            return color
        }
    }

    rturnY( acy,acr,def ) {
        if ( acy <= 0 + acr ) {
            return 4
        }
        if ( acy >= canvas.height - acr ) {
            return -4
        }

        if ( acy > 0 + acr && acy < canvas.height - acr ) {
            return def;
        }
    }

    rturnX( acx,acr,def ) {

        if ( acx <= 0 + acr ) {
            return 4
        }
        if ( acx >= canvas.width - acr ) {
            return -4
        }
        if ( acx > 0 + acr && acx < canvas.width - acr ) {
            return def;
        }

    }

    rdm( min,max ) {
        return Math.random() * ( max - min ) + min;
    }

    draw() {
        ctx.beginPath();
        ctx.arc( this.ox,this.oy,this.or,this.pi,this.oBol );
        ctx.strokeStyle = "whitesmoke";
        ctx.fillStyle = color
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc( this.ox1,this.oy1,this.or1,this.pi,this.oBol );
        ctx.strokeStyle = color1;
        ctx.stroke();
        ctx.closePath();

    }
}

class Animat {
    constructor( x,y,w,h ) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.anima()

        this.draw()
    }

    anima() {
        if ( itc ) {
            anmi = 0
            var inetr = setInterval( () => {

                if ( anmi1 >= 10 || anmi <= 0 ) {
                    itc = false;
                    clearInterval( inetr );
                    anmi1 = 10
                    if ( anmi <= -10 ) {
                        anmi = 0
                    }
                } else {
                    anmi1++;
                    anmi--;

                }
            }
                ,45 )
        } else if ( itc === false ) {
            var inter1 = setInterval( () => {
                if ( anmi1 <= 0 || anmi >= 10 ) {
                    clearInterval( inter1 )
                    itc = true;
                } else {
                    anmi1--;
                    anmi++;
                }
            }
                ,45 )
        }
    }
    clearAnmi() {
        anmi = 0;
        anmi1 = 0;
    }
    draw() {
        // schoes behind
        ctx.beginPath();
        ctx.rect( ( ( ( ( this.x - leftFt ) ) + ausgl ) - ausgl1 ) + deX,( this.y + 45 ) - anmi1 + 1,this.w + 6,10 );
        //shoes behind
        ctx.fillStyle = "#040a08";
        ctx.rotate( rota * Math.PI / 180 );
        ctx.fill();
        ctx.closePath();
 
        ctx.beginPath();
        ctx.rect( this.x + deX,( this.y - 15 ),this.w - 4,this.h + 35 );
        // body
        ctx.fillStyle = '#274f45';
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect( ( ( ( ( this.x - 5 ) + leftSh ) + ausgl ) - ausgl1 ) + deX,this.y - 10,this.w - 2,32 );
        //shirt 10
        ctx.fillStyle = "#5b5959";
        ctx.fill();
        ctx.closePath();

        /* head2 */
        ctx.beginPath();
        ctx.arc( ( ( ( ( this.x + 7 ) + leftHd ) + ausgl ) - ausgl1 ) + deX,this.y - 25, /*r*/
            17.5,2.7 * Math.PI,true );
        //head2
        ctx.fillStyle = "#ffddb7";
        ctx.fill();
        ctx.closePath();

        /* basecap */
        ctx.beginPath();
        ctx.arc( ( ( ( ( this.x + 4 ) + leftHx ) + ausgl ) - ausgl1 ) + deX,( ( this.y - 33 ) + leftBcY ) - leftY, /*r*/
            20 + leftR,rightPii * Math.PI,false );
        ctx.fillStyle = "#274c7a";
        ctx.fill();
        ctx.closePath();
        /* EYE */
        ctx.beginPath();
        ctx.arc( ( ( ( ( this.x + 17 ) - leftEye ) + ausgl ) - ausgl1 ) + deX,this.y - 24.7, /*r*/
            6,2 * Math.PI,false );
        //eye leftEye=17
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect( ( ( ( ( this.x - leftFt ) ) + ausgl ) - ausgl1 + 1 ) + deX,( this.y + 42 ) - anmi,this.w + 6,12 );
        //shoes 19
        ctx.fillStyle = "#404244";
        ctx.rotate( rota * Math.PI / 180 )
        ctx.fill();
        ctx.closePath();

    }
}
// var qw = 180 , qx = (canvas.width - qw), qh = 50, qy = (canvas.height - (qh + 40) ), deltaQx = -4;
/*
class Recta { 
    constructor(qx,qy,qw,qh) {
        this.qx = qx;
        this.qy = qy;
        this.qw = qw;
        this.qh = qh;
        

        this.delta();
        this.draw();
    }
    delta() {
        if ( qx > canvas.width - qw ) {
            deltaQx = -4;
        } else if ( this.qx < 0  ) {
            deltaQx = 4;
        }
        this.qx += deltaQx;
        qx = this.qx;

    }
    
    draw() {
        ctx.beginPath();
        ctx.rect(qx,qy,qw,qh);
        ctx.strokeStyle="white";
        ctx.stroke();
        ctx.closePath();
    }

}
*/


function clear() {
    if ( dead === false ) {
        if ( open === true ) {   } else {
    canvas.width = 1000;
    canvas.height = 420;
    ctx.clearRect( 0,0,canvas.width,canvas.height );
        }
    };
    requestAnimationFrame( clear );
    requestAnimationFrame( start );
   
}

function start() {
    if ( dead === false ) {
        if ( open === true ) {  } else {
            player = new Player( x,( y ),20,10 );
            if ( kyRight || kyLeft ) {
                dont = false;
                animat = new Animat( ( ( x - 2 ) + ausgl / 2 ) + ausgl1 * 7,( y ),20,10 );
            } else {
                anmi = 0;
                anmi1 = 0;
            }
            enemy = new Enemy( ix,iy,10,0,2 * Math.PI );
            objct = new objctBck( ox,oy,or,pi,oBol,ox1,oy1,or );
        }
    }

}
requestAnimationFrame( clear );
requestAnimationFrame( start );
start();
