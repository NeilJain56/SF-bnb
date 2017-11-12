/* gloabl bootbox */
$(document).ready(function() {
    initPage();
  function initPage() {
      $.get("/chart1")
        .then(function(data) {
          var mychart = (document).getElementById('chart_div').getContext('2d');  
          var chart_div = new Chart(mychart, 
          {
           type:'bar',
           data:{
                  labels: json2array(data, 'neighbourhood'),
                  datasets:[{
                              label:'Average Price Chart', 
                              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#791014","#AF7AC5","#F1C40F","#808000","#00FF00","#FF00FF","#800080","#008080","#FA8072","#F4D03F","#34495E","#FF5733","#330000","#ff0000","#ffbf00","#00ffbf","#b2b266","#444422","#00004d","#003333","#2d862d","#006666"],    
                              data: json2array(data, 'Avg_price') //dataArray
                          }],
                },
           options:{
                      scales: {
                          yAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Price in USD $'
                            }
                          }],
                          xAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Business District'
                            }
                          }]
                      }     
           }
            } );  
    });

      $.get("/chart2")
        .then(function(data) {
          var mychart = (document).getElementById('chart_div1').getContext('2d');  
          var  chart_div = new Chart(mychart, 
          {
           type:'line',
           data:{
                  labels: json2array(data, 'neighbourhood'),
                  
                  datasets:[{
                              label:'Minimum Price Chart',
                              
                               borderColor: "#3e95cd",
                              fill: false,
                              strokeColor: "rgba(151,187,205,1)",
                              pointColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#791014","#AF7AC5","#F1C40F","#808000","#00FF00","#FF00FF","#800080","#008080","#FA8072","#F4D03F","#34495E","#FF5733","#330000","#ff0000","#ffbf00","#00ffbf","#b2b266","#444422","#00004d","#003333","#2d862d","#006666"],
                              pointStrokeColor: "#fff",
                              pointHighlightFill: "#fff",
                              pointHighlightStroke: "rgba(151,187,205,0.8)" ,  
                              data: json2array(data, 'Min_price') //dataArray
                          }],
                },
           options:{
             scales: {
                          yAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Price in USD $'
                            }
                          }],
                          xAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Business District'
                            }
                          }]
                      }     
            }
            } );  
    });

      $.get("/chart3")
        .then(function(data) {
            var mychart = (document).getElementById('chart_div2').getContext('2d');  
          var chart_div = new Chart(mychart, 
          {
           type:'pie',
           data:{
                  labels: json2array(data, 'neighbourhood'),
                  datasets:[{
                              label:'Maximum Price Chart ', 
                              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#791014","#AF7AC5","#F1C40F","#808000","#00FF00","#FF00FF","#800080","#008080","#FA8072","#F4D03F","#34495E","#FF5733","#330000","#ff0000","#ffbf00","#00ffbf","#b2b266","#444422","#00004d","#003333","#2d862d","#006666"],
                              data: json2array(data, 'Max_price') //dataArray

                          }],
                },

           options:{
                     title: {
                              display: true,
                              fontsize: 14,
                              text: 'Maximum price/Area'
                            },
                         legend: {
                                  display: true,
                                  position: 'bottom',
                                  }
                    }
            } );  
    });


      $.get("/chart4")
        .then(function(data) {
          console.log(json2array(data, 'neighbourhood'));
          console.log(json2array(data, 'Count'));
          var mychart = (document).getElementById('chart_div4').getContext('2d');  
          var chart_div = new Chart(mychart, 
          {
           type:'bar',
           data:{
                  labels: json2array(data, 'neighbourhood'),
                  datasets:[{
                              label:'Popular Area Chart', 
                              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#791014","#AF7AC5","#F1C40F","#808000","#00FF00","#FF00FF","#800080","#008080","#FA8072","#F4D03F","#34495E","#FF5733","#330000","#ff0000","#ffbf00","#00ffbf","#b2b266","#444422","#00004d","#003333","#2d862d","#006666","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#791014","#AF7AC5","#F1C40F","#808000","#00FF00","#FF00FF","#800080","#008080","#FA8072","#F4D03F","#34495E","#FF5733","#330000","#ff0000","#ffbf00","#00ffbf","#b2b266","#444422","#00004d","#003333","#2d862d","#006666","#3cba9f","#e8c3b9","#c45850","#3cba9f","#3cba9f"],    
                              data: json2array(data, 'Count') //dataArray
                          }],
                },
           options:{
                      scales: {
                          yAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Number of bookings'
                            }
                          }],
                          xAxes: [{
                            scaleLabel: {
                              display: true,
                              labelString: 'Business District'
                            }
                          }]
                      }     
           }
            } );  
    });



  };
function json2array(data, jKey){
    var result = [];
    var keys = Object.keys(data);
    keys.forEach(function(key){
        result.push(data[key][jKey]);
    });
    return result;
}         


});
 