class Wednesday extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div style={{position:'relative'}}>
            <center><img src="images/isitWednesday.png"/></center>
            <center><img src="images/world-map.png" alt="world-map"/></center>
            <img src={this.whichImage(this.calcTime(-5))} style={{position:'absolute', top:275, left:175, width:170, height:170}}/>
            <img src={this.whichImage(this.calcTime(-4))} style={{position:'absolute', top:565, left:300,width:200,height:200}}/>
            <img src={this.whichImage(this.calcTime(-2))} style={{position:'absolute', top:175, left:430,width:140,height:140}}/>
            <img src={this.whichImage(this.calcTime(2))} style={{position:'absolute', top:550, left:600,width:200,height:200}}/>
            <img src={this.whichImage(this.calcTime(2))} style={{position:'absolute', top:310, left:680,width:140,height:140}}/>
            <img src={this.whichImage(this.calcTime(7))} style={{position:'absolute', top:315, left:875,width:150,height:150}}/>
            <img src={this.whichImage(this.calcTime(10))} style={{position:'absolute', top:600, left:975,width:170,height:170}}/>
            <center><img src="images/myDudes.png"/></center>
            </div>
                )
    }
    
    calcTime(offset) {
        var d = new Date(); //gets current date in timezone

        var utc = new Date(d.getTime() + (d.getTimezoneOffset() * 60000)); //removes current timezones offset from date to get date in UTC time

        var adjust = new Date(utc.getTime() + (offset * 3600000));
        return (adjust.getDay(offset)); //adjusts to offset timezone and returns the new day of week
    }
    
    whichImage(day) {
        if (day == 3) {
            return "images/wednesday.jpg";
        }
        else if (day == 2) {
            return "images/almostWednesday.jpg"
        }
        else {
            return "images/notWednesday.jpg"
        }
    }
}