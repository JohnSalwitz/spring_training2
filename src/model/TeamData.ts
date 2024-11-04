
export type TeamAbreviationType = string;
export type TeamDataType = [name: string, abreviation: TeamAbreviationType];

const TEAM_DATA : Array<TeamDataType> = [
    ["Arizona Diamondbacks","ARI"],
    ["Atlanta Braves","ATL"],
    ["Baltimore Orioles","BAL"],
    ["Boston Red Sox","BOS"],
    ["Chicago Cubs","CHC"],
    ["Chicago White Sox","CWS"],
    ["Cincinnati Reds","CIN"],
    ["Cleveland Indians","CLE"],
    ["Colorado Rockies","COL"],
    ["Detroit Tigers","DET"],
    ["Florida Marlins","FLA"],
    ["Houston Astros","HOU"],
    ["Kansas City Royals","KAN"],
    ["Los Angeles Angels of Anaheim","LAA"],
    ["Los Angeles Dodgers","LAD"],
    ["Milwaukee Brewers","MIL"],
    ["Minnesota Twins","MIN"],
    ["New York Mets","NYM"],
    ["New York Yankees","NYY"],
    ["Oakland Athletics","OAK"],
    ["Philadelphia Phillies","PHI"],
    ["Pittsburgh Pirates","PIT"],
    ["San Diego Padres","SD"],
    ["San Francisco Giants","SF"],
    ["Seattle Mariners","SEA"],
    ["St. Louis Cardinals","STL"],
    ["Tampa Bay Rays","TB"],
    ["Texas Rangers","TEX"],
    ["Toronto Blue Jays","TOR"],
    ["Washington Nationals","WAS"],
 ];

export const TEAM_DATA_WEST : Array<TeamDataType> = [
    ["Arizona Diamondbacks","ARI"],
    ["Chicago Cubs","CHC"],
    ["Chicago White Sox","CWS"],
    ["Cincinnati Reds","CIN"],
    ["Cleveland Indians","CLE"],
    ["Colorado Rockies","COL"],
    ["Kansas City Royals","KAN"],
    ["Los Angeles Angels of Anaheim","LAA"],
    ["Los Angeles Dodgers","LAD"],
    ["Milwaukee Brewers","MIL"],
    ["Oakland Athletics","OAK"],
    ["San Diego Padres","SD"],
    ["San Francisco Giants","SF"],
    ["Seattle Mariners","SEA"],
    ["Texas Rangers","TEX"],
];

export const TEAM_TICKET_SITES: {[team: string] : string} = {
    "ARI" : "https://saltriverfields.com/spring-training-at-salt-river-fields/",
    "CHC" : "https://www.mlb.com/cubs/sloan-park/tickets/single-game",
    "CWS" : "",
    "CIN" : "",
    "CLE" : "",
    "COL" : "https://saltriverfields.com/spring-training-at-salt-river-fields/",
    "KAN" : "",
    "LAA" : "https://www.mlb.com/angels/spring-training",
    "LAD" : "",
    "MIL" : "https://www.mlb.com/brewers/spring-training/ballpark",
    "OAK" : "https://www.mlb.com/athletics/tickets/spring-training",
    "SD" : "",
    "SF" : "https://www.mlb.com/giants/tickets/single-game-tickets",
    "SEA" : "",
    "TEX" : "",

    }


export default TEAM_DATA;