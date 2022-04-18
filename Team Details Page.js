//Team Name
//○ Team Icon
//○ Player Count
//○ Top Batsman
//○ Top Bowler
//○ Championship Won Count

var teamDetails=
[
    {
        "name": "Mumbai Indians",
        "icon": "./imgs/mi.jpg",
        "playerCount": "15",
        "topBatsman": "Rohit Sharma",
        "topBowler": "Bumrah",
        "championshipWon": "5",
    },
    {
        "name": "Chennai SuperKings",
        "icon": "./imgs/csk.png",
        "playerCount": "15",
        "topBatsman": "Rohit Sharma",
        "topBowler": "Bumrah",
        "championshipWon": "3",
    },
    {
        "name": "Delhi Challengers",
        "icon": "./imgs/dc.jpg",
        "playerCount": "15",
        "topBatsman": "Rohit Sharma",
        "topBowler": "Bumrah",
        "championshipWon": "1",
    },
    {
        "name": "Kings-11 Punjab",
        "icon": "./imgs/kings.jfif",
        "playerCount": "15",
        "topBatsman": "Rohit Sharma",
        "topBowler": "Bumrah",
        "championshipWon": "1",
    },
    {
        "name": "Kolkata Knight Riders",
        "icon": "./imgs/kkr.png",
        "playerCount": "15",
        "topBatsman": "",
        "topBowler": "",
        "championshipWon": "3",
    },
    {
        "name": "Lucknow Nawabs",
        "icon": "./imgs/lucknow.jfif",
        "playerCount": "15",
        "topBatsman": "",
        "topBowler": "",
        "championshipWon": "0",
    },
    {
        "name": "Royal Challengers Banglore",
        "id": 6,
        "icon": "./imgs/rcb.jpg",
        "playerCount": "15",
        "topBatsman": "",
        "topBowler": "",
        "championshipWon": "0",
    },
    {
        "name": "Rajasthan Royals",
        "id": 7,
        "icon": "./imgs/rr.jpg",
        "playerCount": "15",
        "topBatsman": "",
        "topBowler": "",
        "championshipWon": "0",
    },
     
    {
        "name": "Ahmedabad Lions",
        "id": 8,
        "icon": "./imgs/ahmedabad lions.jpg",
        "playerCount": "15",
        "topBatsman": "",
        "topBowler": "",
        "championshipWon": "0",
    },
    {
        "name": "Sunrisers Hyderabad",
        "id": 9,
        "icon": "./imgs/sunrisers.png",
        "playerCount": "15",
        "topBatsman": "",
        "topBowler": "",
        "championshipWon": "0",
    }  
                        
    ]

$(document).ready(function(){
    var teamDetails=JSON.parse(localStorage.getItem("teamDetails"));
    $(".mi-image").attr("src",teamDetails.icon);
})
    


    
    