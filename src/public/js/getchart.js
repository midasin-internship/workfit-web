
function getURLParams(url) {
    var result = {};
    url.replace(/[?&]{1}([^=&#]+)=([^&#]*)/g, function(s, k, v) { result[k] = decodeURIComponent(v); });
    return result;
}

window.onload = () => {
    const data = getURLParams(location.search)
    const quarter = data.q

    /* Request */


    const ctx = document.querySelector("canvas.chart")
    const chart = new Chart( ctx, {
        type: 'doughnut',
        data: {
            labels: ['입사자','퇴사자'],
            datasets: [{
                label: '입사자-퇴사자',
                data: [5,7],
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


