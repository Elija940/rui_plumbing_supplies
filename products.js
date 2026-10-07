// Edit this file to change your products. Prices are SAMPLE values in KES: replace them with your real prices.
// Each product: id (unique, no spaces), cat (category), name, note, variants as [label, price].
const W = "Water Supply & Storage", P = "Pumps & Water Heating";
const PRODUCTS = [
  {id:"ppr-pipe", cat:W, name:"PPR pipe", note:"Hot and cold water, 4 m length.", variants:[["20 mm",450],["25 mm",650],["32 mm",980]]},
  {id:"pex-pipe", cat:W, name:"PEX pipe", note:"Flexible pipe for hot and cold water, per roll.", variants:[["16 mm",3200],["20 mm",4800]]},
  {id:"cpvc-pipe", cat:W, name:"CPVC pipe", note:"Hot and cold water, 3 m length.", variants:[["20 mm",520],["25 mm",780]]},
  {id:"ball-valve", cat:W, name:"Ball valve", note:"Quarter-turn shut-off valve.", variants:[["1/2 inch",350],["3/4 inch",480],["1 inch",720]]},
  {id:"gate-valve", cat:W, name:"Gate valve", note:"Full-flow isolation valve.", variants:[["1/2 inch",550],["3/4 inch",780],["1 inch",1100]]},
  {id:"check-valve", cat:W, name:"Check valve", note:"Stops water flowing backwards.", variants:[["1/2 inch",420],["3/4 inch",600],["1 inch",880]]},
  {id:"angle-valve", cat:W, name:"Angle valve", note:"For basins, toilets and taps.", variants:[["1/2 inch",300]]},
  {id:"float-valve", cat:W, name:"Float valve", note:"Keeps tank water at the right level.", variants:[["1/2 inch",650],["3/4 inch",900]]},
  {id:"prv", cat:W, name:"Pressure-reducing valve", note:"Protects pipes and fittings from high pressure.", variants:[["1/2 inch",3800],["3/4 inch",5200]]},
  {id:"tank", cat:W, name:"Water storage tank", note:"Food-grade, with lid.", variants:[["500 L",9500],["1000 L",16500],["2000 L",31000]]},
  {id:"hose", cat:W, name:"Flexible connector hose", note:"Braided hose for taps and cisterns.", variants:[["30 cm",250],["45 cm",320],["60 cm",400]]},
  {id:"booster", cat:P, name:"Booster pump", note:"Raises pressure for showers and taps.", variants:[["0.5 hp",12500],["1 hp",18500]]},
  {id:"borehole", cat:P, name:"Submersible / borehole pump", note:"For wells and boreholes.", variants:[["0.75 hp",28000],["1.5 hp",46000]]},
  {id:"solar", cat:P, name:"Solar water heater", note:"Roof-mounted, tank included.", variants:[["100 L",42000],["200 L",68000],["300 L",95000]]},
  {id:"shower", cat:P, name:"Instant electric shower", note:"Hot water on demand.", variants:[["5.5 kW",5500],["8.5 kW",7800]]}
];
