//console.log('Papa Need Some Prada Bag & Heel Money');

const quotes = [
    '“Great nails don’t happen by chance. They happen by appointment.”',

    '“Don’t judge a polish by its first coat.”',
                
    '“I used to think there were only 7 colors. That was before I started shopping for nail polish.”',
                
    '“Nail art is a vacation for plain nails.”',
                
    '“It’s all fun and games until someone breaks a nail.”',
                
    '“Life is not perfect but your nails can be.”',
                
    '“I believe in manicures.” - Audrey Hepburn',
                
    '“Nails are the period at the end of the sentence. They complete the look.” - Prabal Gurung',
                
    '“You’re never fully dressed without a good manicure.” - Essie Weingarten',
                
    '“Nails take any old outfit and make it new.” - Essie Weingarten',
                
    '“Your nails are a way to speak your style without having to say a word.”',
                
    '“I like long romantic walks to the nail salon.”',
                
    '“May your monday be short, your coffee be strong, & your nails get compliments.”',
                
    '“Your hands and feet never take a day off so make sure you treat them.”',
                
    '“A girl without beautiful nails is like a night without stars.”',
                
    '“Nail art does not need to be perfect. It just needs to be you.”',
                
    '“I don’t like plain nails. I get sad.” - Zooey Deschanel',
                
    '“Your nails say everything about you.”',
                
    '“I’ve never seen nails go out of style.” - Tammy Taylor',
                
    '“Nail polish speaks louder than words.”',
                
    '“Nails are not about being noticed, they are about being remembered.” - Tammy Taylor',            
            ]; 

const colors = [
    'Color(s): Red', 
    'Color(s): Pink',
    'Color(s): Yellow', 
    'Color(s): Orange',
    'Color(s): White', 
    'Color(s): Black',
    'Color(s): Purple', 
    'Color(s): Nude',
    'Color(s): Glitter', 
    'Color(s): Black & White',
    'Color(s): Rainbow', 
    'Color(s): Grey',
    'Color(s): Pink & Orange', 
    'Color(s): Pink & Red',
    'Color(s): Pink & Yellow', 
    'Color(s): Yellow & purple',
    'Color(s): Brown', 
    'Color(s): Nude & Neon',
    'Color(s): Neon', 
    'Color(s): Green',
    'Color(s): Jewel Tone', 
    'Color(s): Burgandy',
    'Color(s): Blue', 
    'Color(s): Metallic',
];

const design = [
    'Design: French Tip',
    'Design: Polka Dots',
    'Design: K.I.S.S - Keep It Simple Sis',
    'Design: Animal Print',
    'Design: Checkerboard',
    'Design: Stripes',
    'Design: Minimalism',
    'Design: Abstract',
    'Design: Wavy',
    'Design: Kitty',
    'Design: Marble',
    'Design: Geometric',
    'Design: Ombre',
    'Design: Food',
    'Design: Rhinestones',
    'Design: Chains',
    'Design: Words',
    'Design: Flowers',
    'Design: Butterflies',
    'Design: Alternating',
    'Design: Half & Half',
]


function pickedQuotes(){

    let randomQuote = Math.floor(Math.random() * 21);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote];

    let randomColor = Math.floor(Math.random() * 23);
    document.getElementById('colorDisplay').innerHTML = colors[randomColor];

    let randomDesign = Math.floor(Math.random() * 20);
    document.getElementById('designDisplay').innerHTML = design[randomDesign];
}
