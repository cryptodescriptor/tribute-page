var $show_more = $('#show-more');
var $hidden = $('#hidden');
var $visible = $('#visible');

var timeline = {"timeline": ["<li><strong>1946</strong> Freddie Mercury was born Farrokh Bulsara to Bomi and Jer Bulsara in Stone Town, Zanzibar (Tanzania). His father worked as a cashier at the British Colonial Office</li>",
   "<li><strong>1952</strong> Freddie\u2019s sister, Kashmira, was born to Bomi and Jer Bulsara.</li>",
   "<li><strong>1953</strong> Freddie began taking piano lessons.</li>",
   "<li><strong>1954</strong> Freddie was sent to St Peter\u2019s Boarding School in Panchgani, Bombay, India.</li>",
   "<li><strong>1958</strong> Freddie formed \u2018The Hectics\u2019 a school band that played covers of popular songs. Around this time he began to use the christian name Freddie.</li>",
   "<li><strong>1963</strong> Freddie had completed his education at St Peter\u2019s and returned to Zanzibar.</li>",
   "<li><strong>1964</strong> The Zanzibar Revolution forced Freddie and his family to leave Zanzibar. They fled to England where they lived in Feltham.</li>",
   "<li><strong>1964</strong> Freddie became an art student at Isleworth Polytechnic (West Thames College).</li>",
   "<li><strong>1966</strong> Freddie studied Art and Design at Ealing Art College.</li>",
   "<li><strong>1968</strong> Freddie became friends with art student Tim Staffell who, along with astonomy student Brian May had formed the group Smile.</li>",
   "<li><strong>1969</strong> Freddie and girlfriend Mary Austin sold second-hand clothes at Kensington Market to make money. He also worked for a time as a baggage handler at Heathrow Airport.</li>",
   "<li><strong>1969</strong> Freddie joined Liverpool band \u2018Ibex\u2019 and moved to Liverpool where he lived in a flat.</li>",
   "<li><strong>1970</strong> The band \u2018Ibex\u2019 was not doing well. Freddie answered an ad in Melody Maker and became lead vocalist of the group \u2018Sour Milk Sea\u2019. However, this group also failed to take off.</li>",
   "<li><strong>1970</strong> When Freddie\u2019s friend, Tim Staffell, left the group Smile, Freddie Bulsara persuaded Brian May and group drummer Roger Taylor that he should replace Staffell as lead singer.</li>",
   "<li><strong>1970</strong> Encouraged by Freddie, the band Smile changed their name to Queen.</li>",
   "<li><strong>1970</strong> The group Queen made their first performance.</li>",
   "<li><strong>1971</strong> Queen played as supporting act for the group Yes at Kingston Polytechnic.</li>",
   "<li><strong>1971</strong> John Deacon became the new bass player for Queen.</li>",
   "<li><strong>1971</strong> Queen made a demo tape of four of their songs \u2018Liar\u2019, \u2018Keep Yourself Alive\u2019, \u2018The Night Comes Down\u2019, \u2018Jesus\u2019. However, none of the recording companies it was sent to were interested in signing the band.</li>",
   "<li><strong>1971</strong> Freddie Balsara changed his name to Freddie Mercury.</li>",
   "<li><strong>1971</strong> Queen performed at Surrey College.</li>",
   "<li><strong>1972</strong> Freddie Mercury designed a crest logo for Queen.</li>",
   "<li><strong>1972</strong> Queen signed a recording contract with Trident Studios. They were to be managed by Neptune Productions, a subsidiary of Trident, and would record new material at Trident Studios.</li>",
   "<li><strong>1973</strong> Trident signed a recording contract with EMI.</li>",
   "<li><strong>1973</strong> Freddie released the single \u2018I Can Hear Music/Goin\u2019 Back\u2019 under the pseudonym Larry Lurex but it didn\u2019t do very well.</li>",
   "<li><strong>1973</strong> Queen released their first album entitled \u2018Queen\u2019. It reached number 83 in the US and number 47 in the UK.</li>",
   "<li><strong>1973</strong> Queen went on tour as supporting act for the group Mott The Hoople.</li>",
   "<li><strong>1974</strong> The group released the single \u2018Seven Seas of Rhye\u2019. It reached number 10 in the UK charts.</li>",
   "<li><strong>1974</strong> Queen made a tour of Britain to promote their second album.</li>",
   "<li><strong>1974</strong> Queen released their second album Queen II. It reached number 5 in the UK charts and number 49 in the US.</li>",
   "<li><strong>1974</strong> The group began a tour of America as supporting act to Mott The Hoople.</li>",
   "<li><strong>1974</strong> Brian May collapsed on stage and the band had to abandon the tour of America. May was suffering from hepatitis which incapacitated him for some time.</li>",
   "<li><strong>1974</strong> Queen released the double A-side single \u2018Killer Queen/Flick of the Wrist\u2019. It reached number 2 in the UK and number 12 in the US.</li>",
   "<li><strong>1974</strong> The album \u2018Sheer Heart Attack\u2019 was released. It reached number 2 in the UK charts and number 12 in the US.</li>",
   "<li><strong>1975</strong> Queen began a sell-out tour of the United States.</li>",
   "<li><strong>1975</strong> The group hired a lawyer to get them out of their contract with Trident.</li>",
   "<li><strong>1975</strong> The song \u2018Now I\u2019m Here\u2019 from the album \u2018Sheer Heart Attack\u2019 was released as a single. It reached number 11 in the UK.</li>",
   "<li><strong>1975</strong> Queen played for the first time in Canada.</li>",
   "<li><strong>1975</strong> Queen made a tour of Japan.</li>",
   "<li><strong>1975</strong> Freddie Mercury received an Ivor Novello award for his song \u2018Killer Queen\u2019.</li>",
   "<li><strong>1975</strong> Having left their agreement with Trident, Queen signed a management deal with John Reid.</li>",
   "<li><strong>1975</strong> The group wanted to release \u2018Bohemian Rhapsody\u2019, written by Freddie, as a single but they were told that at 5 minutes and 55 seconds no radio station would play it and it would be a flop. Freddie Mercury gave a copy of the single to his friend, DJ Kenny Everett, telling him he was not to play it but Everett did play it and other radio stations followed suit.</li>",
   "<li><strong>1975</strong> Queen released the single \u2018Bohemian Rhapsody\u2019. It stayed at number 1 in the UK charts for 9 consecutive weeks and sold over a million copies. It reached number 9 in the US charts. It was also the first single to be released with a music video.</li>",
   "<li><strong>1975</strong> The group embarked on a tour of Europe, the United States, Japan and Australia to promote the album \u2018Night At The Opera\u2019.</li>",
   "<li><strong>1975</strong> The album \u2018A Night At The Opera\u2019 was released. It reached number 1 in the UK charts and number 4 in the US.</li>",
   "<li><strong>1976</strong> Freddie ended his relationship with Mary Austin and began a relationship with a male employee at Elektra Records. He remained friends with Austin for the rest of his life.</li>",
   "<li><strong>1976</strong> Freddie Mercury received an Ivor Novello Award for \u2018Bohemian Rhapsody\u2019.</li>",
   "<li><strong>1976</strong> The song \u2018You\u2019re My Best Friend\u2019 from \u2018A Night AT The Opera\u2019 was released as a single. It reached number 7 in the UK and number 16 in the US.</li>",
   "<li><strong>1976</strong> As a thank you to their fans, Queen staged a free concert in Hyde Park, London.</li>",
   "<li><strong>1976</strong> The song \u2018Somebody To Love\u2019 from the album \u2018A Day At The Races\u2019 was released as a single. It reached number 2 in the UK and number 13 in the US.</li>",
   "<li><strong>1976</strong> The album \u2018A Day At The Races\u2019 was released. It reached number 1 in the UK and number 5 in the US</li>",
   "<li><strong>1977</strong> Queen made a tour of the United States and Canada.</li>",
   "<li><strong>1977</strong> The song \u2018Tie Your Mother Down\u2019 from the album \u2018A Day At The Races\u2019 was released as a single. It reached number 31 im the UK and 47 in the US.</li>",
   "<li><strong>1977</strong> Queen began a tour of Europe.</li>",
   "<li><strong>1977</strong> The song \u2018Good Old Fashioned Lover Boy\u2019 from the album \u2018A Day At The Races\u2019 was released as a single. It reached number 17 in the UK.</li>",
   "<li><strong>1977</strong> The single \u2018We Are The Champions\u2019 with \u2018We Will Rock You\u2019 as the B side, was released. It reached number 2 in the UK and number 4 in the US. Both tracks were taken from the album \u2018News Of The World\u2019.</li>",
   "<li><strong>1977</strong> The album \u2018News Of The World\u2019 was released. It reached number 4 in the UK and number 3 in the US.</li>",
   "<li><strong>1978</strong> The group agreed a severance deal with manager John Reid and set up their own management structure.</li>",
   "<li><strong>1978</strong> The song \u2018Spread Your Wings\u2019 from the album \u2018News Of The World\u2019 was released as a single. It reached number 34 in the UK.</li>",
   "<li><strong>1978</strong> Queen embarked on a tour of Europe.</li>",
   "<li><strong>1978</strong> Queen began a tour of the United States and Canada.</li>",
   "<li><strong>1978</strong> The songs \u2018Bicycle Race\u2019 and \u2018Fat Bottomed Girls\u2019 from the album \u2018Jazz\u2019 were released as a double A-side single. The single reached number 11 in the UK and number 24 in the US.</li>",
   "<li><strong>1978</strong> The album \u2018Jazz\u2019 was released. It reached number 2 in the UK and number 6 in the US.</li>",
   "<li><strong>1979</strong> The song \u2018Don\u2019t Stop Me Now\u2019 from the album \u2018Jazz\u2019 was released as a single. It reached number 9 in the UK charts. It fared less well in the United States only reaching number 86.</li>",
   "<li><strong>1979</strong> The group embarked on a tour of Japan.</li>",
   "<li><strong>1979</strong> The live double album \u2018Live Killers\u2019 was released. It reached number 3 in the UK and number 16 in the US.</li>",
   "<li><strong>1979</strong> The song \u2018Crazy Little Thing Called Love\u2019 from the album \u2018The Game\u2019 was released as a single. It reached number 2 in the UK and number 1 in the US.</li>",
   "<li><strong>1979</strong> Queen performed at the Concert for the People of Kampuchea in London which had been organised as a charity event by Paul McCartney.</li>",
   "<li><strong>1980</strong> The song \u2018Save Me\u2019 from the album \u2018The Game\u2019 was released as a single. It reached number 11 in the UK.</li>",
   "<li><strong>1980</strong> The song \u2018Play The Game\u2019 from the album \u2018The Game\u2019 was released as a single. It reached number 14 in the UK and number 42 in the US.</li>",
   "<li><strong>1980</strong> The album \u2018The Game\u2019 was released. It reached number 1 in the UK and US charts.</li>",
   "<li><strong>1980</strong> The song \u2018Another One Bites The Dust\u2019 from the album \u2018The Game\u2019 was released as a single. It reached number 7 in the UK and number 1 in the US.</li>",
   "<li><strong>1980</strong> Queen released their soundtrack to the film \u2018Flash Gordon\u2019 as an album. It reached number 10 in the UK and number 23 in the US.</li>",
   "<li><strong>1981</strong> The group began a tour of South America, the first rock group to tour the continent.</li>",
   "<li><strong>1981</strong> Queen collaborated with the singer David Bowie on the single \u2018Under Pressure\u2019. It reached number 1 in the UK and number 29 in the US.</li>",
   "<li><strong>1981</strong> Queen released the compilation album \u2018Greatest Hits\u2019 of hits from 1974 to 1980. It reached number 1 in the UK and number 11 in the US.</li>",
   "<li><strong>1982</strong> The song \u2018Body Language\u2019 from the album \u2018Hot Space\u2019 was released as a single. It only reached number 25 in the UK but reached number 11 in the US.</li>",
   "<li><strong>1982</strong> Queen released the album \u2018Hot Space\u2019. It reached number 4 in the UK and number 22 in the US.</li>",
   "<li><strong>1982</strong> The song \u2018Back Chat\u2019 from the album \u2018Hot Space\u2019 was released as a single. It was not a big success, only reaching number 40 in the UK.</li>",
   "<li><strong>1982</strong> Queen played their last concert in the United States with Freddie Mercury. Their popularity had declined in the States.</li>",
   "<li><strong>1984</strong> The song \u2018Radio Ga Ga\u2019 from the album \u2018The Works\u2019 was released as a single. It reached number 2 in the UK and number 16 in the US.</li>",
   "<li><strong>1984</strong> Queen released the album \u2018The Works\u2019. It reached number 2 in the UK and number 23 in the US.</li>",
   "<li><strong>1984</strong> The song \u2018I Want to Break Free\u2019 from the album \u2018The Works\u2019 was released as a single. It reached number 3 in the UK and number 45 in the US.</li>",
   "<li><strong>1984</strong> The song \u2018It\u2019s a Hard Life\u2019 from the album \u2018The Works\u2019 was released as a single. It reached number 6 in the UK but only managed number 72 in the US.</li>",
   "<li><strong>1984</strong> Queen began a 9 month tour to promote their album \u2018The Works\u2019. The band controversially played in South Africa when many artists boycotted the country due to their policy of apartheid and were criticised for doing so.</li>",
   "<li><strong>1984</strong> The song \u2018Hammer to Fall\u2019 from the album \u2018The Works\u2019 was released as a single. It reached number 13 in the UK.</li>",
   "<li><strong>1985</strong> Freddie began a relationship with Barbara Valentin an Austrian actress. Soon after he met Jim Hutton, a hairdresser and began a relationship with him.</li>",
   "<li><strong>1985</strong> Freddie released a solo album \u2018Mr Bad Guy. It reached number 6 in the UK but did not do well in the US.</li>",
   "<li><strong>1985</strong> Queen performed some of their greatest hits at the Live Aid concert held at Wembley Stadium, London. Their performance has been voted one of the greatest live rock music performances of all time.</li>",
   "<li><strong>1985</strong> The group released the song \u2018One Vision\u2019 from the album \u2018A Kind of Magic\u2019 as a single. It reached number 7 in the UK but only reached number 61 in the US.</li>",
   "<li><strong>1985</strong> A boxed set of Queen\u2019s 12 albums to date entitled \u2018The Complete Works\u2019 was released.</li>",
   "<li><strong>1986</strong> Queen contributed music to the soundtrack of the film \u2018Highlander\u2019.</li>",
   "<li><strong>1986</strong> Queen released the song \u2018A Kind of Magic\u2019 from the album \u2018A Kind of Magic\u2019 as a single. It reached number 3 in the UK and number 42 in the US.</li>",
   "<li><strong>1986</strong> The album \u2018A Kind of Magic\u2019 was released. It reached No 1 in the UK album charts and number 46 in the US.</li>",
   "<li><strong>1986</strong> Queen began a two month tour of Europe. It would be the last tour with Freddie Mercury and John Deacon.</li>",
   "<li><strong>1986</strong> Queen released the song \u2018Friends Will Be Friends\u2019 from the album \u2018A Kind of Magic\u2019 as a single in Europe. It reached number 14 in the UK.</li>",
   "<li><strong>1986</strong> Queen released the song \u2018Who Wants To Live Forever\u2019 from the album \u2018A Kind of Magic\u2019 as a single in Europe. It reached number 24 in the UK.</li>",
   "<li><strong>1987</strong> A 3 part documentary telling the story of the band\u2019s rise to fame was filmed. It was called Magic Years.</li>",
   "<li><strong>1987</strong> Freddie released the single \u2018The Great Pretender\u2019, a cover of the Platters song. It reached number 5 in the UK.</li>",
   "<li><strong>1987</strong> Freddie Mercury was diagnosed with AIDS. The diagnosis was kept from the public.</li>",
   "<li><strong>1987</strong> Freddie had a huge birthday party on the island of Ibiza. Around 700 guests attended.</li>",
   "<li><strong>1988</strong> Freddie Mercury and Montserrat Caballe performed \u2018Barcelona\u2019 in Barcelona to celebrate the arrival of the Olympic flag from Seoul.</li>",
   "<li><strong>1988</strong> Freddie Mercury and Montserrat Caballe released the album \u2018Barcelona\u2019. It reached number 15 in the UK and number 6 in the US.</li>",
   "<li><strong>1989</strong> Queen released the song \u2018I Want It All\u2019 from the album \u2018The Miracle\u2019 as a single. It reached number 3 in the UK and US charts.</li>",
   "<li><strong>1989</strong> Queen released the album \u2018The Miracle\u2019. It reached number 1 in the Uk and number 24 in the US.</li>",
   "<li><strong>1989</strong> Queen released the song \u2018Breakthru\u2019 from the album \u2018The Miracle\u2019 as a single. It reached number 7 in the UK but did not make the US charts.</li>",
   "<li><strong>1989</strong> Queen released the song \u2018Invisible Man\u2019 from the album \u2018The Miracle\u2019 as a single. It reached number 12 in the UK but did not make the US charts.</li>",
   "<li><strong>1989</strong> Queen released the song \u2018Scandal\u2019 from the album \u2018The Miracle\u2019 as a single. It reached number 25 in the UK.</li>",
   "<li><strong>1989</strong> Queen released the song \u2018The Miracle\u2019 from the album \u2018The Miracle\u2019 as a single. It reached number 21 in the UK.</li>",
   "<li><strong>1990</strong> Freddie Mercury denied rumours that he was very ill.</li>",
   "<li><strong>1990</strong> Queen were awarded for their \u2018Outstanding Contribution to British Music\u2019.</li>",
   "<li><strong>1990</strong> Queen signed a new recording deal with Hollywood Records.</li>",
   "<li><strong>1990</strong> Queen released the video \u2018Queen at Wembley\u2019 which had been recorded on 12th July 1986.</li>",
   "<li><strong>1991</strong> Queen released the song \u2018Innuendo\u2019 from the album \u2018Innuendo\u2019 as a single. It reached number 1 in the UK.</li>",
   "<li><strong>1991</strong> Queen released the album \u2018Innuendo\u2019 It reached number 1 in the UK and number 30 in the US.</li>",
   "<li><strong>1991</strong> Queen released the song \u2018I\u2019m Going Slightly Mad\u2019 from the album \u2018Innuendo\u2019 as a single. It reached number 22 in the UK.</li>",
   "<li><strong>1991</strong> Queen released the song \u2018Headlong\u2019 from the album \u2018Innuendo\u2019 as a single. It reached number 14 in the UK.</li>",
   "<li><strong>1991</strong> Freddie retired from public life to his home in Kensington. He was cared for by Jim Hutton and former girlfriend and lifelong friend, May Austin.</li>",
   "<li><strong>1991</strong> Queen released the song \u2018These Are The Days of Our Lives\u2019 from the album \u2018Innuendo\u2019 as a single. It reached number 1 in the UK.</li>",
   "<li><strong>1991</strong> Queen released the song \u2018The Show Must Go On\u2019 from the album \u2018Innuendo\u2019 as a single. It reached number 16 in the UK and number 40 in the US.</li>",
   "<li><strong>1991</strong> Queen released the compilation album \u2018Greatest Hits II\u2019. It reached number 1 in the Uk and .</li>",
   "<li><strong>1991</strong> Freddie Mercury publicly announced that he had AIDS.</li>",
   "<li><strong>1991</strong> Freddie Mercury died of bronchial pneumonia which he had contracted as a complication of AIDS.</li>",
   "<li><strong>1991</strong> After a funeral service at West London Crematorium, Freddie\u2019s friend, May Austin took his ashes and buried them at an unknown location.</li>"]};

var append_str = '';
var visible_items = 8;

// Populate Timeline
timeline['timeline'].forEach(function(li, i) {
  if (i < visible_items) {
    append_str += li + '\n';
    return;
  } else if (i === visible_items) {
    $visible.html(append_str);
    append_str = '';
  }

  append_str += li + '\n';

  if (i === timeline['timeline'].length-1) {
    $hidden.html(append_str);
  }
});

// Show/Hide handler
$show_more.on('click', function() {
  if ($show_more.hasClass('shown')) {
    $hidden.hide();
    $show_more.text('Show More...').removeClass('shown');
  } else {
    $hidden.show();
    $show_more.text('Hide').addClass('shown');
  }
});
