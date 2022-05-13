import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { DxBarGaugeModule, DxPolarChartModule, DxSelectBoxModule  } from 'devextreme-angular';
import * as Chartist from 'chartist';

declare var $:any;

export class Temperature {
    arg: string;
    day: number;
}




@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html'
})
export class AcceuilComponent implements OnInit, AfterViewInit{
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  public tableData: TableData;
  types = ["scatter", "line", "area", "bar", "stackedbar"];
  temperaturesData: Temperature[] = [{
    arg: "Gmail",
    day: 268
}, {
    arg: "Facebook",
    day: 235000
}, {
    arg: "Twitter",
    day: 111
}, {
    arg: "Instagram",
    day: 77
}];

  startAnimationForLineChart(chart){
      var seq, delays, durations;
      seq = 0;
      delays = 80;
      durations = 500;
      chart.on('draw', function(data) {

        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  }
  startAnimationForBarChart(chart){
      var seq2, delays2, durations2;
      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  }
  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {
      this.tableData = {
          headerRow: ['ID', 'Name', 'Country', 'City'],
          dataRows: [
            ['AU', 'Australia', '26.35%'],  
            ['SG', 'Singapore', '19.20%'],
            ['IE', 'Ireland',  '15.23%'],
            ['FI', 'Finland', '12.35%'],
              ['US', 'USA', '9.23%'],
              ['CA', 'Canada',  '6.94%'],
              ['NO', 'Norway',  '4.34%'],
              ['IT', 'Italy',  '3.20%'],
              ['SE', 'Sweden', '2.87%']
          ]
       };
      /* ----------==========     Daily Sales Chart initialization    ==========---------- */

      var dataDailySalesChart = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     var optionsDailySalesChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);
      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      var dataCompletedTasksChart = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

      var optionsCompletedTasksChart = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

     var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

     this.startAnimationForLineChart(completedTasksChart);

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var dataWebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionsWebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions:any = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);

      this.startAnimationForBarChart(websiteViewsChart);

      var mapData = {
        "AU": 760,
        "SG": 650,
        "IE": 600,
        "FI": 550,
        "US": 500,
        "NZ": 450,
        "CA": 400,
        "NO": 370,
        "IT": 360,
        "VG": 340,
        "IS": 300,
        "CY": 280,
        "SE": 250,
        "DK": 230,
        "MT": 200,
    };
          $('#worldMap').vectorMap({
              map: 'world_mill_en',
              backgroundColor: "transparent",
              zoomOnScroll: false,
              regionStyle: {
                  initial: {
                      fill: '#e4e4e4',
                      "fill-opacity": 0.9,
                      stroke: 'none',
                      "stroke-width": 0,
                      "stroke-opacity": 0
                  }
              },

              series: {
                  regions: [{
                      values: mapData,
                      scale: ["#AAAAAA","#444444"],
                      normalizeFunction: 'polynomial'
                  }]
              },
          });
   }
   ngAfterViewInit(){
       var breakCards = true;
       if(breakCards == true){
           // We break the cards headers if there is too much stress on them :-)
           $('[data-header-animation="true"]').each(function(){
               var $fix_button = $(this);
               var $card = $(this).parent('.card');
               $card.find('.fix-broken-card').click(function(){
                   console.log(this);
                   var $header = $(this).parent().parent().siblings('.card-header, .card-image');
                   $header.removeClass('hinge').addClass('fadeInDown');

                   $card.attr('data-count',0);

                   setTimeout(function(){
                       $header.removeClass('fadeInDown animate');
                   },480);
               });

               $card.mouseenter(function(){
                   var $this = $(this);
                   var hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                   $this.attr("data-count", hover_count);
                   if (hover_count >= 20){
                       $(this).children('.card-header, .card-image').addClass('hinge animated');
                   }
               });
           });
       }
       //  Activate the tooltips
       $('[rel="tooltip"]').tooltip();
   }

   customizeText(arg) {
    return arg.valueText ;
}
}
