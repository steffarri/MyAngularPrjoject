import { Component, Input, ViewChild, HostListener, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { google } from '@agm/core/services/google-maps-types';
import {$} from 'jquery';
import {GoogleMapsAPIWrapper, AgmMap } from '@agm/core';

@Directive({
  selector: 'markersinfo',
 
  
})

export class MarkersInfoComponent {

public WarnerBroInfo = "This is a great tour if you can get out in the LA Area!" +
" You will go behind the scenes on some of the studios and get a history of the show" + 
" you can see and how everything works. You are able to see all the props and how it" +
" works and is actually used in other movies and shows. You get to see where the outside" + 
" of the show Friends was places, and Jurassic Park, also a huge neighborhood of houses." + 
" It's in numerous shows and movies. It's interesting to see tons of houses that look"
+ " enormous, but are actually only 5 feet wide! ";
public VeniceBeachInfo = "This was the basic beach scene in all the California movies, and" +
" the cool place to be. Their is such a scenery from mountains to the beach, roller skaters, " +
"dancers, shops, small random street shows, lots of fried foods, skate park, and you can't forget" +
" muscle beach for the outside gym! This place is worth checking out.";
public Seattle = "They have a famous Starbucks Roastery here and aslo you can check out the needle, and shops, "+
"and if you go further you'll be able to see some amazing mountains and do some hiking.";
public Hollywood = "This is one of the most popular areas you here about, when it comes to stars. Their" +
" is one long street with stars, which are fascinating to see, but very downgraded around. Many bums, trash, and" +
" tons of tourists. Their is numerous things to do and shows to attend though, but get back to LA soon :)";
public WashingtonDC = "A great place to sight see and walk around the city. Their is always something going on" +
" and you can walk by the White House, Monuments, and many other activities.";
public Baltimore = "Well if you're a floridian, this place is about the opposite. It was a great place for the" +
" famous crab cakes. They have an amazing aquarium in the city and a thing called the subway :o";
public Miami = "You need to visit South Beach! The water was so clear, don't forget a snorkle and goggles too." +
" This is place that I recommend to go out too!";
public Orlando = "Where do I start? Disney, Shopping, Univeral.  ";
public SaintPete = "My Home Town! Not sure where to start but the beach is the #1 place I absolutelty love," +
"and yes you can see the whole sunset on this coast! Downtown St.Pete is absolutelty georgous as well!";
public Arizona = "So much sand everywhere! I was shocked to not see grass at first, but it is a desert..." +
" I loved exploring here and so many cities to drive to and mountains to climb :)";
public GrandCanyon = "This is a MUST SEE, this place its absolutely beautiful and you need to visit all the areas." +
" You may spot some Elk and even snow! Be prepared to bring a jacket if you go during the winter. ";
public GoldenGateBridge = "Just like the pictures, incredible. It's fascinating to learn about the history here," +
 " and you can do a few hikes up the mountains if you want one of the best pictures";
public Alcatraz = "This is a little island right in San Francisco that you have to take a ferry too. This place has" +
" so much history from being a fort to a prison and you can get a tour and even audio stories of everything";
public SanFrancisco = "If you ar wondering if you want to visit this place, you really should. Their is Sea Lions," +
"Ghiradelli Factory, China Town, Golden Gate Bridge, Alcatraz, Apple and Google Corporations, and so much more!";
public KeyWest = "Bring your goggles, snorkle, and energy. If you go down duval street, which is the main street of " +
"all the main bars, rent a bicycle! You can go everywhere from the beach to the bars to your hotel. Watch out for the " +
"chickens crossing the road though!";
public WestVirginia = "This is a great place to go snowboarding and have a great view of the mountains. The resort I went " +
"to is called SnowShoe and goes from blue, to green the even black diamond slopes!";
public NorthCarolina = "If you want to get a feel for what snowboarding or skiing is like, this is a good start." + 
" You can even get lessons and go to the bunny slope to learn. They're numerous terrain trais to go down as well!";
public Colorado = "This is one of the best ski resort I have been to and I highly recommend it. Tons of snow is always" +
"here and so many trails to go down! They have multiple places to rent gear easily and you can even get a cabin right " +
"on the slope, it's a great experience.";
public SantaBarbara = "So many wine tastings and mountains you can check out. They are famous for their Wine and even have " +
" great breweries all around the town. Tons of mountains to hike and even have a ostrich farm, where you can feed the ostrich." +
"Also, don't forget to check out State Street, where their is tons of shops and events going on in this area.";
public Solvang = "The smallest city ever, but is famous for their Danish treats. If you go through here, you can't leave without " +
"a danish.";
public SanDiego = "This town has a little of everything. Including Hiking, mountains, ocean and surfing, the city, and more. I " +
"highly recommend to hike the Iron Mountain.";
public SantaMonica = "If you are here, check out the pier and rides. They have tons of shops and events going on around the " +
"pier as well, including some surf.";


}