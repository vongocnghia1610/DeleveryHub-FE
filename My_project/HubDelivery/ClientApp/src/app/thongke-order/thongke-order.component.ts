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


      // var mau = ["Th??ng 1", "Th??ng 2", "Th??ng 3", "Th??ng 4", "Th??ng 5", "Th??ng 6", "Th??ng 7", "Th??ng 8", "Th??ng 9", "Th??ng 10", "Th??ng 11", "Th??ng 12",]
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
            text: "Bi???u ????? th??? hi???n s??? ????n b??n ???????c trong 7 ng??y g???n nh???t (s??? ????n)"
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
                labelString: 'S??? ????n'
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
            text: "Bi???u ????? th??? hi???n doanh thu trong 7 ng??y g???n nh???t (VN??)"
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
                labelString: 'Doanh thu (VN??)'
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
      alert("Kh??ng c?? ????n h??ng n??o");
      
   
   
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
      var mau = ["Th??ng 1", "Th??ng 2", "Th??ng 3", "Th??ng 4", "Th??ng 5", "Th??ng 6", "Th??ng 7", "Th??ng 8", "Th??ng 9", "Th??ng 10", "Th??ng 11", "Th??ng 12",]
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
            text: "Bi???u ????? th??? hi???n s??? ????n b??n ???????c trong 3 th??ng g???n nh???t (s??? ????n)"
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
            text: "Bi???u ????? th??? hi???n doanh thu trong 3 th??ng g???n nh???t (VND)"
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
      alert("Kh??ng c?? ????n h??ng n??o");
      
   
   
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
      var lab = ["Th??ng 1", "Th??ng 2", "Th??ng 3", "Th??ng 4", "Th??ng 5", "Th??ng 6", "Th??ng 7", "Th??ng 8", "Th??ng 9", "Th??ng 10", "Th??ng 11", "Th??ng 12",]
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
            text: "Bi???u ????? th??? hi???n s??? ????n b??n ???????c n??m "+year+ " (s??? ????n)"
          },

          scales: {

            xAxes: [{
              id: 'follower',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Th??ng'
              },
            }
            ],
            yAxes: [{
              id: 'followers',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'S??? ????n'
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
            text: "Bi???u ????? th??? hi???n doanh thu trong n??m "+year+" (VN??)"
          },

          scales: {

            xAxes: [{
              id: 'follower',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Th??ng'
              },
            }
            ],
            yAxes: [{
              id: 'followers',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Doanh thu (VN??)'
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
      alert("Kh??ng c?? ????n h??ng n??o");
      
   
   
  });
  }
  clickonew() {
    return this.message = ["Th???ng k?? c???a m???t tu???n"]
  }
  clickthreem() {
    return this.message = ["Th???ng k?? c???a ba th??ng"]
  }
  clickoney() {
    return this.message = ["Th???ng k?? c???a m???t n??m"]
  }

}