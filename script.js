for(var i = 0; i < 100; i++){
    var rn1 = Math.floor((Math.random() * 9));
                     for(var n = 0; n < TileArray.length; n++){
                         
                         if(TileArray[n].getNumber() === 9){
                             var tempX = TileArray[rn1].getX();
    	                     var tempY = TileArray[rn1].getY();
                             
                             if(TileArray[rn1].getX() + 100 === TileArray[n].getX() && TileArray[rn1].getY() === TileArray[n].getY()){
                                 
    	                         
    	                          TileArray[rn1].setX(TileArray[n].getX());
                                  TileArray[rn1].setY(TileArray[n].getY());
    	
    	                          TileArray[n].setX(tempX);
    	                          TileArray[n].setY(tempY);
                             }
                             
                             else if(TileArray[rn1].getX() - 100 === TileArray[n].getX() && TileArray[rn1].getY() === TileArray[n].getY()){
                            
    	                          
    	                          TileArray[rn1].setX(TileArray[n].getX());
                                  TileArray[rn1].setY(TileArray[n].getY());
    	
    	                          TileArray[n].setX(tempX);
    	                          TileArray[n].setY(tempY);
                             }
                             
                             else if(TileArray[rn1].getY() + 100 === TileArray[n].getY() && TileArray[rn1].getX() === TileArray[n].getX()){
                            
    	                          
    	                          TileArray[rn1].setX(TileArray[n].getX());
                                  TileArray[rn1].setY(TileArray[n].getY());
    	
    	                          TileArray[n].setX(tempX);
    	                          TileArray[n].setY(tempY);
                             }
                             
                             else if(TileArray[rn1].getY() - 100 === TileArray[n].getY() && TileArray[rn1].getX() === TileArray[n].getX()){
                            
    	                          
    	                          TileArray[rn1].setX(TileArray[n].getX());
                                  TileArray[rn1].setY(TileArray[n].getY());
    	
    	                          TileArray[n].setX(tempX);
    	                          TileArray[n].setY(tempY);
                             }
                             
                             
                         }
                     
           }
       }