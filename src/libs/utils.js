export default {
  getUserData() {
    if (localStorage.getItem('user_data')) {
      return JSON.parse(localStorage.getItem('user_data'))
    } else {
      return ''
    }
  },
  isVideo(src) {
    if (src.split('.')[3] === 'mp4')
      return true
  },
  timePassedFormat(date, short = false) {
    var today = new Date()

    var time_passed= today - date
    var segs = 1000;
    var mins = segs * 60;
    var hours = mins * 60;
    var days = hours * 24;
    var months = days * 30.416666666666668;
    var years = months * 12;

    var years_c = Math.floor(time_passed / years);

    time_passed = time_passed - (years_c * years);
    var months_c = Math.floor(time_passed / months)

    time_passed = time_passed - (months_c * months);
    var days_c = Math.floor(time_passed / days)

    time_passed = time_passed - (days_c * days);
    var hours_c = Math.floor(time_passed / hours)

    time_passed = time_passed - (hours_c * hours);
    var minutes_c = Math.floor(time_passed / mins)
    
    time_passed = time_passed - (minutes_c * mins);
    var segs_c = Math.floor(time_passed / segs)
    if (years_c === 0 && months_c === 0 && days_c === 0 && hours_c === 0 && minutes_c === 0 && segs_c < 5) {
      return short ? '1s' : '1 seconds ago';
    } else if (years_c === 0 && months_c === 0 && days_c === 0 && hours_c === 0 && minutes_c === 0) {
      return `${segs_c} ${short ? 's' : 'seconds ago'}`;
    } else if (years_c === 0 && months_c === 0 && days_c === 0 && hours_c === 0) {
      return `${minutes_c} ${short ? 'min' : 'minuter ago'}`;
    } else if (years_c === 0 && months_c === 0 && days_c === 0) {
      return `${hours_c} ${short ? 'h' : 'hours ago'}`;
    } else if (years_c === 0 && months_c === 0) {
      return `${days_c} ${short ? 'd' : 'days ago'}`;
    } else if (years_c === 0) {
      return `${months_c} ${short ? 'm' : 'months ago'}`;
    } else {
      return `${years_c} ${short ? 'y' : 'years ago'}`;
    }
  },
  isEmail(email) {
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(email)) return true
    else return false
  },
} 
