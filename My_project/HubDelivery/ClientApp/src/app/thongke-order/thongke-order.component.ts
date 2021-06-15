import { Component, OnInit, Inject, ApplicationModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { } from '@angular/common'
import { from } from 'rxjs/observable/from';
import { Router } from '@angular/router'
import { Chart } from 'chart.js'
import { m } from '@angular/core/src/render3';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-thongke-order',
  templateUrl: './thongke-order.component.html',
  styleUrls: ['./thongke-order.component.css']
})
export class ThongkeOrderComponent implements OnInit {


  array: any = []
  message = []
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {


  }

  getdataoneweek() {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);
    

    this.http.get(`https://be-b010.herokuapp.com/enterprises/show-order-in-one-week-by-enterprise`, { headers: headers }).subscribe((res) => {

    
      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(res);
      var date = new Date();
      date.setDate(date.getDate());

      var ngay7 = date.getDate() + "/" + (date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      var ngay6 = date.getDate() + "/" + (date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      var ngay5 = date.getDate() + "/" + (date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      var ngay4 = date.getDate() + "/" + (date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      var ngay3 = date.getDate() + "/" + (date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      var ngay2 = date.getDate() + "/" + (date.getMonth() + 1);
      date.setDate(date.getDate() - 1);

      var ngay1 = date.getDate() + "/" + (date.getMonth() + 1);


      // var mau = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",]
      var lab = [ngay1, ngay2, ngay3, ngay4, ngay5, ngay6, ngay7];
      var datachart_donhang = [this.array[0].donhang, this.array[1].donhang, this.array[2].donhang, this.array[3].donhang, this.array[4].donhang, this.array[5].donhang, this.array[6].donhang]
      var datachart_doanhthu = [this.array[0].doanhthu, this.array[1].doanhthu, this.array[2].doanhthu, this.array[3].doanhthu, this.array[4].doanhthu, this.array[5].doanhthu, this.array[6].doanhthu]
      //1
      var myChart = new Chart("myChart1", {
        type: 'bar',
        data: {
          labels: lab,
          datasets: [{
            label: 'Doanh thu',
            data: datachart_donhang,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth: 2

          }]
        },
        options: {
          title:
          {
            display: true,
            text: "Biểu đồ thể hiện số đơn bán được trong 7 ngày gần nhất (số đơn)"
          },

          scales: {

            xAxes: [{
              id: 'follower',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              },
            }
            ],
            yAxes: [{
              id: 'followers',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Số đơn'
              },
              gridLines: {
                display: false,
                drawTicks: false,
              },
              ticks: {
                display: true,
                beginAtZero: true,
                padding: 5,
                precision: 0,
              },
            }
            ]
          }
        }
      });

      //2
      var myChart1 = new Chart("myChart2", {
        type: 'bar',
        data: {
          labels: lab,
          datasets: [{
            label: 'Doanh thu',
            data: datachart_doanhthu,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            hoverBorderWidth: 2

          }]
        },
        options: {
          title:
          {
            display: true,
            text: "Biểu đồ thể hiện doanh thu trong 7 ngày gần nhất (VNĐ)"
          },

          scales: {

            xAxes: [{
              id: 'follower',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              },
            }
            ],
            yAxes: [{
              id: 'followers',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Doanh thu (VNĐ)'
              },
              gridLines: {
                display: false,
                drawTicks: false,
              },
              ticks: {
                display: true,
                beginAtZero: true,
                padding: 5,
                precision: 0,
              },
            }
            ]
          }
        }
      });
      document.getElementById("divChart1").style.visibility = "visible";
      document.getElementById("divChart2").style.visibility = "visible";
      document.getElementById("divChart3").style.visibility = "hidden";
      document.getElementById("divChart4").style.visibility = "hidden";
      document.getElementById("divChart5").style.visibility = "hidden";
      document.getElementById("divChart6").style.visibility = "hidden";
      return this.array;



    },error=>{
        
      if( error.error != "null")
      alert("Không có đơn hàng nào");
      
   
   
  }
    );
  }
  getdatathreemonth() {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`https://be-b010.herokuapp.com/enterprises/show-order-in-three-month-by-enterprise`, { headers: headers }).subscribe((res) => {


      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      var month = new Date;
      var month1 = month.getMonth();
      var thang1, thang2, thang3;
      if (month1 == 1) {
        thang1 = 11;
        thang2 = 0;
        thang3 = 1;
      }
      else if (month1 == 0) {
        thang1 = 10;
        thang2 = 11;
        thang3 = 0;
      }
      else {
        thang1 = month1 - 2;
        thang2 = month1 - 1;
        thang3 = month1;
      }
      var mau = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",]
      var lab = [mau[thang1], mau[thang2], mau[thang3]];
      var datachart_donhang = [this.array[0].donhang, this.array[1].donhang, this.array[2].donhang]
      var datachart_doanhthu = [this.array[0].doanhthu, this.array[1].doanhthu, this.array[2].doanhthu]

      var myChart = new Chart("myChart3", {
        type: 'doughnut',

        data: {
          labels: lab,

          datasets: [{
            data: datachart_donhang,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'

            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'

            ],
            borderWidth: 1,
            hoverRadius: 10,
            hoverBorderWidth: 5

          }]


        },

        options: {
          title:
          {
            display: true,
            text: "Biểu đồ thể hiện số đơn bán được trong 3 tháng gần nhất (số đơn)"
          }

        }


      });

      //chart 4

      var myChart1 = new Chart("myChart4", {
        type: 'doughnut',
        data: {
          labels: lab,
          datasets: [{
            data: datachart_doanhthu,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'

            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            borderWidth: 1,
            hoverRadius: 10,
            hoverBorderWidth: 5

          }]
        },
        options: {
          title:
          {
            display: true,
            text: "Biểu đồ thể hiện doanh thu trong 3 tháng gần nhất (VND)"
          }

        }


      });

      document.getElementById("divChart1").style.visibility = "hidden";
      document.getElementById("divChart2").style.visibility = "hidden";
      document.getElementById("divChart3").style.visibility = "visible";
      document.getElementById("divChart4").style.visibility = "visible";
      document.getElementById("divChart5").style.visibility = "hidden";
      document.getElementById("divChart6").style.visibility = "hidden";

      return this.array;



    },error=>{
        
      if( error.error != "null")
      alert("Không có đơn hàng nào");
      
   
   
  });
  }
  getdataoneyear() {
    let headers = new HttpHeaders();
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token
    console.log(token);
    headers = headers.set('Access-Control-Allow-Origin', '*').set('Authorization', token);


    this.http.get(`https://be-b010.herokuapp.com/enterprises/show-order-in-one-year-by-enterprise`, { headers: headers }).subscribe((res) => {


      this.array = Object.entries(res)
      this.array = Object.values(this.array[0][1])
      console.log(this.array);
      var date=new Date();
      var year=date.getFullYear();
      var lab = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",]
      var datachart_donhang = [this.array[0].donhang, this.array[1].donhang, this.array[2].donhang, this.array[3].donhang, this.array[4].donhang, this.array[5].donhang, this.array[6].donhang,
                              this.array[7].donhang, this.array[8].donhang, this.array[9].donhang, this.array[10].donhang, this.array[11].donhang]
      var datachart_doanhthu = [this.array[0].doanhthu, this.array[1].doanhthu, this.array[2].doanhthu, this.array[3].doanhthu, this.array[4].doanhthu, this.array[5].doanhthu, this.array[6].doanhthu,
                              this.array[7].doanhthu, this.array[8].doanhthu, this.array[9].doanhthu, this.array[10].doanhthu, this.array[11].doanhthu]
      //5
      var myChart = new Chart("myChart5", {
        type: 'line',
        data: {
          labels: lab,
          datasets: [{
            label: 'Doanh thu',
            data: datachart_donhang,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
              
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',

            ],
            borderWidth: 1,
            hoverBorderWidth: 2

          }]
        },
        options: {
          title:
          {
            display: true,
            text: "Biểu đồ thể hiện số đơn bán được năm "+year+ " (số đơn)"
          },

          scales: {

            xAxes: [{
              id: 'follower',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Tháng'
              },
            }
            ],
            yAxes: [{
              id: 'followers',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Số đơn'
              },
              gridLines: {
                display: false,
                drawTicks: false,
              },
              ticks: {
                display: true,
                beginAtZero: true,
                padding: 5,
                precision: 0,
              },
            }
            ]
          }
        }
      });

      //6
      var myChart1 = new Chart("myChart6", {
        type: 'line',
        data: {
          labels: lab,
          datasets: [{
            label: 'Doanh thu',
            data: datachart_doanhthu,
            backgroundColor: [
              
              'rgba(54, 162, 235, 0.2)'
              
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1,
            hoverBorderWidth: 2

          }]
        },
        options: {
          title:
          {
            display: true,
            text: "Biểu đồ thể hiện doanh thu trong năm "+year+" (VNĐ)"
          },

          scales: {

            xAxes: [{
              id: 'follower',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Tháng'
              },
            }
            ],
            yAxes: [{
              id: 'followers',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Doanh thu (VNĐ)'
              },
              gridLines: {
                display: false,
                drawTicks: false,
              },
              ticks: {
                display: true,
                beginAtZero: true,
                padding: 5,
                precision: 0,
              },
            }
            ]
          }
        }
      });
      document.getElementById("divChart1").style.visibility = "hidden";
      document.getElementById("divChart2").style.visibility = "hidden";
      document.getElementById("divChart3").style.visibility = "hidden";
      document.getElementById("divChart4").style.visibility = "hidden";
      document.getElementById("divChart5").style.visibility = "visible";
      document.getElementById("divChart6").style.visibility = "visible";
      return this.array;



    },error=>{
        
      if( error.error != "null")
      alert("Không có đơn hàng nào");
      
   
   
  });
  }
  clickonew() {
    return this.message = ["Thống kê của một tuần"]
  }
  clickthreem() {
    return this.message = ["Thống kê của ba tháng"]
  }
  clickoney() {
    return this.message = ["Thống kê của một năm"]
  }

}