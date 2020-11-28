<?php 
$nav = (isset($_GET['nav']) && $_GET['nav'] != '') ? $_GET['nav']: '';
?>
<html>
        <head>
                <title> Lance Vaflor's Portfolio</title>
                <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        
        <body>
        <div class="container">
                <br/>

                    <div class="header">

                        <div class="dropdown"><button class="dropbtn">Prelim</button><div class="dropdown-content">
                            <a href="index.php?nav=Mod2">Module 2</a>
                            <a href="index.php?nav=Mod3">Module 3</a>
                            <a href="index.php?nav=Mod4">Module 4</a>
                        </div>
                        </div>

                        <div class="dropdown"><button class="dropbtn">Midterm</button><div class="dropdown-content">
                            <a href="index.php?nav=SVG_Shapes">SVG Shapes</a>
                            <a href="index.php?nav=SVG_Text_Art">SVG Text Art</a>
                            <a href="index.php?nav=SVG_Animation">SVG Animation</a>
                            <a href="FLOOM/index.php"target="_blank">CLE Midterm</a>    
                        </div>       
                        </div>
                            <div class="dropdown><button class="dropbtn">Endterm</button><div class="dropdown-content">
                                 <a href="Canvas_Drawing/index.php"target="_blank>LT 7.1</a>
                        </div>
                        </div>
                        <div class="github">
                                <a href="https://github.com/LanceVaflor/webanimation-portfolio">GitHub</a>
                        </div>        
                </div>
          <br/>
          
          <div class="content">
              <?php
              switch($nav){
                  case 'SVG_Text_Art':
                    require_once 'SVG/SVG_Text_Art.php';
                    break;
                  case 'SVG_Animation':
                    require_once 'SVG/SVG_Animation.php';
                    break;
                  case 'SVG_Shapes':
                    require_once 'SVG/SVG_Shapes.php';
                    break;
                  case 'Mod3':
                    require_once 'CSS/Module3.php';
                    break;
                    case 'Mod2':
                    require_once 'CSS/Module2.php';
                    break;
                  case 'Mod4':
                    require_once 'CSS/Module4.php';
                    break;
                  default:
                    require_once 'index.php';  
              }
              ?>
          </div>
        </div>  
</html>             
