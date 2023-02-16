
function getURLParams(url) {
    var result = {};
    url.replace(/[?&]{1}([^=&#]+)=([^&#]*)/g, function(s, k, v) { result[k] = decodeURIComponent(v); });
    return result;
}

window.onload = () => {
    const data = getURLParams(location.search)
    const quarter = data.quarter
    const year = data.year

    /* Request */
    const req = new XMLHttpRequest()
    req.open("GET","http://dev.workfit.kro.kr:8080/employees/statistics?quarter="+quarter+"&year="+year)
    req.responseType='json'
    req.onload = () => {
        const datas = req.response

        const ctx = document.querySelector("canvas.chart")
                const chart = new Chart( ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['입사자','퇴사자'],
                        datasets: [{
                            label: '입사자-퇴사자',
                            data: [datas.joined,datas.exited],
                            borderWidth: 1,
                            scaleBeginAtZero: true,
                        }]
                    },
                    options: {
                        animations: {
                          
                        }
                      }
                })
    }
    req.send()
    



}


