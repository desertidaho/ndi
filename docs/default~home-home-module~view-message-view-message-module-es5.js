(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~view-message-view-message-module"], {
    /***/
    "./src/app/services/data.service.ts":
    /*!******************************************!*\
      !*** ./src/app/services/data.service.ts ***!
      \******************************************/

    /*! exports provided: DataService */

    /***/
    function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_assets_poems_poems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/assets/poems/poems.js */
      "./src/assets/poems/poems.js");

      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);

          this.messages = new src_assets_poems_poems_js__WEBPACK_IMPORTED_MODULE_2__["Poems"]().getPoemsData();
        }

        _createClass(DataService, [{
          key: "getMessages",
          value: function getMessages() {
            return this.messages;
          }
        }, {
          key: "getMessageById",
          value: function getMessageById(id) {
            return this.search(id);
          }
        }, {
          key: "search",
          value: function search(id) {
            console.log(id);

            for (var i = 0; i < this.messages.length; i++) {
              if (this.messages[i].id === id) {
                this.messages[i].read = true;
                return this.messages[i];
              }
            }
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DataService);
      /***/
    },

    /***/
    "./src/assets/poems/poems.js":
    /*!***********************************!*\
      !*** ./src/assets/poems/poems.js ***!
      \***********************************/

    /*! exports provided: Poems */

    /***/
    function srcAssetsPoemsPoemsJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Poems", function () {
        return Poems;
      });

      var Poems = /*#__PURE__*/function () {
        function Poems() {
          _classCallCheck(this, Poems);

          this.nowIdaho = "From where I stand <br />\n    Beneath the sky\u2019s southeastern sun and water-tower, <br />\n    Inline with a few riddles of time <br />\n    Before travel was banned, and <br />\n    Outlaws roaming dirty-wild in masks and spurs <br />\n    With gallant horses fierce in battle <br />\n    Protecting monolithic foundations at the Temple of Jupiter <br />\n    To praise Athena and the much older sun deity Shamash, <br />\n    Lived a tribe, in the deserts of now Idaho. <br />\n    Happy people, doing their best to survive. <br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.valiantAndOtherwise = "\n    There will be a tomorrow </br>\n    Until our consciousness </br>\n    Melts into flowers, and mud </br>\n    Cascading down a river with </br>\n    Red-brown canyon walls and birds circling to land </br>\n    Before night scares them from the sky. </br>\n    Did he want a watery grave </br>\n    When twisting currents took his final breath, or </br>\n    Was it his reward for so many efforts, </br>\n    Valiant and otherwise? </br>\n    Tonight we danced to the music and silence </br>\n    Me, and all my other selves </br>\n    Laughing, at the wonder of it all, </br>\n    My soul glowing </br>\n    Brighter than distant stars in the dark.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.asteroidsOrbit = "\n    There\u2019s gravel in my gut </br>\n    Aseity is my form </br>\n    Asteroids orbit my Angkor Wat voice </br>\n    Fortify, multiply, resupply... </br>\n    Demystify the horrible events that await us </br>\n    As diversion from the truth\u2014 </br>\n    Powerful financial terrorists and spies </br>\n    Undermine capitalism, our freedoms </br>\n    In their ravenous lust for power </br>\n    They print endless amounts of money. </br>\n    Financial terrorists enslave all </br>\n    With lockdowns and masks </br>\n    For the disease created in a lab and unleashed upon us. </br>\n    What if the world is not as they describe? </br>\n    Younger Dryas caused our social amnesia </br>\n    From those that lived before us. </br>\n    Bitcoin provides hope for a better future! </br>\n    This scarce and beautiful digital money </br>\n    Removes the root source of their despotic power\u2014 supply. </br>\n    A just society requires not using fiat fake money! </br>\n    End the madness of vile centralized banking\u2014 </br>\n    Fewer bombs will drop from the sky. </br>\n    How will we be remembered, if at all? </br>\n    Get ready for their new monetary paradigm, </br>\n    Doppler reveals it\u2019s very near.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.dancingSilently = "\n    Sitting beside the black diagonals of the rubber doormat </br>\n    Is a pair of Chaco's in the dirt </br>\n    The sandal straps, green and blue, rigid in place </br>\n    Waiting patiently for the next step </br>\n    Down a well-maintained USFS gravel road, around </br>\n    Twenty meters from where I'm parked, camping </br>\n    Alone, except for the varied calls of passing birds, and </br>\n    In the distance, a fire lookout tower, whose attendant, I hope </br>\n    Greatly appreciates the hospitality of their view. </br>\n    I'm on an adventure to the Malhuer National Forest </br>\n    To escape the low elevations of August, to isolate </br>\n    And to read, observe, consider, and reflect\u2014 </br>\n    Some of which are things a chess player ought to do before every move. </br>\n    It's been a peaceful experience, living </br>\n    In this pine-scented Central Oregon mountain air </br>\n    And I have enjoyed a feeling that everything is okay, will be okay... </br>\n    The pastel horizon dancing silently into the evening dark.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.memoriesOfAnotherTime = "\n    Here are the desert grasses </br>\n    Waving easterly in the Wyoming high-plateau breeze </br>\n    Mid-summer snow-packed Teton peaks carving half the horizon </br>\n    Light flashing gold purple wildflowers </br>\n    And perfectly healthy colored sage. </br>\n    It's Warren Bridge freedom at the Green River stream\u2014 </br>\n    Fisherman, rafting, antelope grazing </br>\n    Borges poetry, metaphysics, Java server-side logic </br>\n    Paneer tikka masala, almonds, plenty of water </br>\n    And importantly, no distractions from iPhone bombardment. </br>\n    Along with Isidoro Su\xE1rez </br>\n    We will all someday be desert dust, </br>\n    And glory\u2014 </br>\n    Memories of another time. </br>\n    I choose to be present here now </br>\n    Alone in this serene, peaceful desert. </br>\n    Hello to the world, and </br>\n    Thank you for today.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.nationalEmpire = "\n    Hungry and afraid they soldiered onward </br>\n    Finding peace in the simplest of things\u2014 </br>\n    A cumulus picture in the expansive blue afternoon sky, <br />\n    The greening yard of an early Idaho spring, <br />\n    Flowers, so beautiful, vivid, and real. <br />\n    Heroically they survived the dying days <br />\n    Of the greatest national empire of debt <br />\n    The multiverse could create, yet <br />\n    The vicious cycle would start anew, as <br />\n    The banking cartel strictly enforced <br />\n    The use of their new global money, <br />\n    Mayer Anselm Rothschild\u2019s ancestor <br />\n    Repeating from his island pink palace <br />\n    That he who controls the money supply <br />\n    Cares not who makes the laws.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.sansAnesthesia = "\n    With god-like furry, and <br />\n    The temperament of a rogue wave, <br />\n    He steeled himself against the others. <br />\n    How dare they be unaware <br />\n    Of the devilish plot <br />\n    To marginalize, separate, and shear. <br />\n    Fear and worry strangled dissents, <br />\n    Almost all became witting accomplices <br />\n    To their own confinements, yet <br />\n    The virulent debasements did sneak past them <br />\n    In the night of hundred year scheme, <br />\n    Bankers, business, politicians dissected them <br />\n    Sans anesthesia. <br />\n    Most were pleased for the scraps <br />\n    Tossed to them from under the table, <br />\n    He was not. <br />\n    He committed to stand with Julian, <br />\n    As truth will break their spines.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.misstepsOfGoodIntentions = "\n    From missteps of good intentions <br />\n    The wanderer became unwelcome <br />\n    In his trek through gray-brown desert. <br />\n    Sagebrush began to whistle insults as he walked, <br />\n    The wind was unrelenting, gritty, oppressive, <br />\n    And a cold spring rainstorm pelted his face, <br />\n    Wearing him out, <br />\n    Weighing him down, <br />\n    Chafing his every step. <br />\n    Eventually he stumbled on a downslope, and fell, <br />\n    Landing hard upon a crooked rock, <br />\n    Injured and unsure. <br />\n    After a moment of uncertainty <br />\n    He stood, <br />\n    Tall and fierce, <br />\n    Knowing it would take infinitely more <br />\n    To break his resolute, western spirit.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.falseHorizon = "\n    The sun sank, expectedly, <br />\n    Into the false horizon of our time. <br />\n    So much human folly, misery <br />\n    For no better reason <br />\n    Than centralized control of money, <br />\n    A tragic decision, <br />\n    And the invisible enemy, <br />\n    A virus, <br />\n    The tiniest of things <br />\n    Setting free the avalanche.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.hereBefore = "\n    In a forested backyard in desert Idaho, <br />\n    A late October chill confirms the autumn colors, <br />\n    Leaves, lying in a portrait on the dulling grass, <br />\n    Dogs chasing squirrels in viscous sprints, and <br />\n    Soft light still shallow in its orbit. <br />\n    Today will be unlike the others, <br />\n    Laughter, like just before the news, when <br />\n    Looking out the window in a forested backyard <br />\n    In a desert town in Idaho, on a <br />\n    Late October morning with a chill, <br />\n    Autumn colors \u2014 leaves, lying in a portrait \u2014 and<br />\n    Light shadows flickering from the apple tree branches. <br />\n    Maybe I have been here before.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.toCare = "\n    As I turn eyes westward<br />\n    A deeply penetrating orange light,<br />\n    Tangled in the hilltop trees,<br />\n    Brings a smile to Heraclitus and me.<br />\n    There\u2019s fire-light running wild through the universe,<br />\n    Setting sun, late April Idaho brisk wind,<br />\n    Hiking trails; time.<br />\n    Hemingway never forgot his first love, the<br />\n    Memory of her more beautiful, abstract,<br />\n    Each passing day.<br />\n    Maybe our purpose is simple\u2014<br />\n    To care, contribute, and<br />\n    Witness the splendor.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.chaosOfRipples = "\n    Ice appeared on the river\u2019s banks today, and<br />\n    On the tops of rocks in the current,<br />\n    Changing the course of the world, from<br />\n    That which was, to<br />\n    That which now is, the<br />\n    Chaos of ripples shimmering then disappearing<br />\n    At the whim of cold passing clouds<br />\n    In the shallow morning sun.<br />\n    The river taught him years ago that<br />\n    Destiny is shaped by innumerable complexities,<br />\n    Owing nothing to precedence or righteousness, and<br />\n    Takes all routes to the same end, simultaneously.<br />\n    If you stop thinking for a moment, and<br />\n    Truly observe and listen,<br />\n    Nature will teach you what it means to be human,<br />\n    Allowing you to levitate just above the ground,<br />\n    For a while.<br />\n    <br />\n    &mdash; Brett Wilcox \n    ";
          this.crippledInSpirit = "\n    It was two hours before sky-dark<br />\n    When the badger was defeated,<br />\n    Crippled in spirit,<br />\n    Awkwardly bruised from the imperial battle,<br />\n    Humbled by the more capable creature<br />\n    Hell-bent on shaping the mountain<br />\n    In the image of its rage.<br />\n    A bird, soaring kingly in the ocean-gray sky,<br />\n    Observed the badger\u2019s thrashing<br />\n    Through the autumn evening rain haze,<br />\n    Predicting the astringent badger would become<br />\n    Disloyal in character, acidic, unwell.<br />\n    In time, sadly, the badger proved the bird true,<br />\n    Plotting with a doltish, clumsy raven<br />\n    The humiliated badger prepared an attack<br />\n    To malign the bird\u2019s account of the beating.<br />\n    Unbeknownst to the badger the spying eyes<br />\n    Of an eagle from afar also bore witness,<br />\n    Saving the bird from unholy disparage<br />\n    Claimed by the deficient duo.<br />\n    Sullen, the badger went back to its hole in the ground,<br />\n    The dimwitted raven knew not what to think.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.primordialRoutine = "\n    The fire light of desert sunrise,<br />\n    Lambent on the proud east walls of Red Rock Canyon,<br />\n    Repeats its primordial routine, dancing<br />\n    Over Spanish tiled roofs, palm trees, cactus.<br />\n    Oh, day\u2014 you are a peculiar stage\u2014<br />\n    And I the lucky one<br />\n    To witness on a simple morning<br />\n    A quiet sunrise, and<br />\n    The ancient sky now peopled with airplanes<br />\n    Jetting triangle dreams that fade colors to blue.<br />\n    For a period of time<br />\n    When the sun is narrowly above the horizon<br />\n    The city between us disappears<br />\n    From the overpowering brightness of our star, yet<br />\n    Against all probability<br />\n    I am here.<br />\n    Today, anew.<br />\n    In this grand opera of sunlight<br />\n    And theater.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.aBeautifulLife = "\n    Maria Flores knew only a beautiful life,<br />\n    The flowered walls of her father\u2019s Mexico estate<br />\n    Sheltered her from the pallid faces and<br />\n    Barrio clutter scattered about the village.<br />\n    Maria knew the sweet taste of fresh cornbread<br />\n    Peppered with green chiles grown in her garden;<br />\n    She knew her papa\u2019s laugh, his smile, his kind voice.<br />\n    Maria knew many nice things, and such is a<br />\n    Lucky childhood, to be the recipient<br />\n    Of a great effort to protect innocence, her<br />\n    Father\u2019s aim to barricade her from incivility, and<br />\n    Foster an environment of creativity and love.<br />\n    Still, the world has a way of falling apart, if only<br />\n    To be reborn with new vigor.<br />\n    The entire village was stunned by the accusation,<br />\n    Assuredly false, that Maria\u2019s father was guilty, then<br />\n    Sentenced to be hanged.<br />\n    The tears flowed as though Thales of Miletus<br />\n    Found the source of his watery arch\xEA in Maria.<br />\n    Her papa was gone.<br />\n    Her happy childhood abruptly ended. Yet,<br />\n    Maria\u2019s newly ashen heart was determined<br />\n    To beat vibrant-red again someday.<br />\n    She would live to make her papa proud, for<br />\n    He taught her\u2014<br />\n    A beautiful life is a choice.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.questionTime = "\n    He walks slowly along the Socratic forest trail<br />\n    Happily enjoying several steps without pain,<br />\n    The ritual of ontological contemplation<br />\n    Coloring nature green, as the<br />\n    First autumn yellow leaves question time.<br />\n    Amid the placid freedom is awareness<br />\n    Of the river song shaping the rocks, but also<br />\n    Acknowledgement of the dark empire\u2019s evil energy<br />\n    Dropping bombs on innocent children for profit.<br />\n    How unjust is this paradise offering moments of<br />\n    Windless warmth from our benevolent star, while<br />\n    Terrorizing untold peoples for differing politics?<br />\n    Maybe injustice cannot be banished, but<br />\n    Indifference to unnecessary suffering allows<br />\n    Those that control the money supply<br />\n    To continue their unconscionable experiments.<br />\n    Decentralize money for more fairness.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.flaubertianStruggle = "\n    Our time here is so tender, yet cruel, a type of<br />\n    Flaubertian struggle to be sure. For the<br />\n    Same riverbank water blessing the tree<br />\n    Undercuts its roots flowing round the bend,<br />\n    Precipitating an overearly death, as the tree<br />\n    Falls in slow motion<br />\n    Toward that which giveth and taketh away,<br />\n    Its life source, and saboteur.<br />\n    Knowing intensifies the grief.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.socialAmnesia = "\n    The desert knows it to be true<br />\n    That we\u2019re much older<br />\n    Than our memories permit us to be, that<br />\n    Wind lifts birds free from the tree, and<br />\n    Rapids make storied kayak streams.<br />\n    What if our nature was peaceful, serene?<br />\n    Hiking over cactus<br />\n    Hiking, hiking over cactus, over cactus.<br />\n    The human story is perhaps incomplete,<br />\n    Maybe there existed more beautiful people<br />\n    Smiling and praying in families of antiquity<br />\n    Than science asks us to believe,<br />\n    Ravens scream murderous themes.<br />\n    Take every chance for love dear flower<br />\n    Stand tall and be brave in all weather, for a<br />\n    Taurid meteor might cause social amnesia,<br />\n    Tomorrow's unimaginable loss of our<br />\n    Triumphs, miseries, collective history,<br />\n    As those that happened before us<br />\n    Evanescent in the ether between stars.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.pastPresent = "\n    With grand uncertainty, and<br />\n    A tender heart, I plead with<br />\n    The spinning of our worlds.<br />\n    Waves and cirrostratus<br />\n    Tell different stories<br />\n    Of the same blue sky,<br />\n    Changing each breath, and<br />\n    Minds racing when we see each-other,<br />\n    Past present, like the wind.<br />\n    There will always be you<br />\n    And the flowers, and<br />\n    The day you never knew about<br />\n    That I want so badly to share, for<br />\n    You are on high in my mind.<br />\n    From a place of deep caring,<br />\n    Desert and the sun.<br />\n    <br />\n    &mdash; Brett Wilcox \n    ";
          this.tyrannyAfoot = "\n    I hear the crickets outside my open summer morning balcony door,<br />\n    And a breeze, perfect across my arm and face.<br />\n    I know.<br />\n    The world can be a beautiful place.<br />\n    Colors, laughter, children, friendship, loyalty, yet<br />\n    I\u2019ve met strangers I fell in love with<br />\n    That showed me the world is a much darker space, where<br />\n    Bombs are dropped on good people, and<br />\n    Banks that create money from nothing<br />\n    Guarantee none of us are free in the end.<br />\n    There\u2019s a tyranny afoot<br />\n    So insidious to normality<br />\n    That the insanity of modern life<br />\n    Is lost on every unthinking being,<br />\n    Led to slaughter by their kings.<br />\n    You see, there\u2019s a nobility,<br />\n    Two classes coexist,<br />\n    Those close to the money printers, and<br />\n    Those more removed.<br />\n    Do you suppose anything about life is truly<br />\n    Set up for your advantage and good health?<br />\n    Then you don\u2019t hear the crickets.<br />\n    Life is a beautiful,<br />\n    Horrible war every day to exist.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.myGrandfathersShop = "\n    I recall with perfect clarity,<br />\n    Yet an inability to describe,<br />\n    The smell of my grandfather\u2019s shop<br />\n    From when I was a young, happy boy.<br />\n    There existed a faint aura of magic<br />\n    About the simple cinder block structure,<br />\n    A shop wherein my grandfather fixed his old Ford,<br />\n    A soft veil of dust swimming in the air, and<br />\n    Filtered light pushing through the weathered translucent door.<br />\n    Very infrequently I get a whiff, ever so slight,<br />\n    That brings a smile to my face all these years later<br />\n    As I\u2019m reminded of my brave grandfather\u2019s shop, and<br />\n    The beautiful, innocent days playing childish games<br />\n    At his home in Idaho.<br />\n    My grandfather died too early, unfairly, in a daze of dementia,<br />\n    Forgetting me.<br />\n    I miss you grandpa, I want to see you again, and tell you<br />\n    Thanks for teaching me how to play chess, and<br />\n    Thanks for all your effort in life.<br />\n    I\u2019m sorry a motorcycle accident caused you to limp and suffer,<br />\n    I know pain now too.<br />\n    Since I didn\u2019t tell you as a child<br />\n    I want to say loudly now\u2014<br />\n    I\u2019m proud of you grandpa, and<br />\n    Thank you for my name.<br />\n    <br />\n    &mdash; Brett Wilcox \n    ";
          this.trespassInItsResplendence = "\n    A pause, then piercing silence in the windstorm<br />\n    Lasting long enough for me to be thankful<br />\n    For a brief reprieve from the rattles and din<br />\n    Ravaging our Balboa Bay mineral exploration tent-camp<br />\n    On a frightening August Alaska Peninsula night.<br />\n    The wild ruckus is perfect cover for the bear to attack, and<br />\n    I swear I hear the wounded brown bear\u2019s passing footsteps<br />\n    Just outside my flapping tent, as it<br />\n    Hunts for the man that shot him yesterday for proximity violation.<br />\n    Several more hours before sunrise,<br />\n    Yet I\u2019m wide awake from the menacing uproar,<br />\n    Appropriately worried,<br />\n    Alone in the darkness,<br />\n    Silently pleading with the bear and the blustering gales<br />\n    To postpone the battle.<br />\n    Someday this rugged land might take me away.<br />\n    Until then I choose to trespass in its resplendence,<br />\n    On a narrow, mountainous, alder strip of land<br />\n    Separating the mighty Pacific Ocean from the angry Bering Sea.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.itsAChoiceToBeKind = "\n    She knew injustice from a distance<br />\n    It pained her just the same,<br />\n    No, not the same,<br />\n    But tears did well from her eyes<br />\n    Wetting the backs of her hands, her arms<br />\n    As she relived the images of his death\u2014<br />\n    A Nigerian man she never knew<br />\n    Bludgeoned for some unknown reason, repeatedly,<br />\n    And thrown into a shallow burning pit, alive.<br />\n    He struggled for while, the man, burning.<br />\n    You know how this ends,<br />\n    And so does she, and she can never forget<br />\n    The horror of mankind.<br />\n    It\u2019s a choice to carry on.<br />\n    It\u2019s a choice to be kind.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.aManOfCourage = "\n    Maria Flores loves her father,<br />\n    Knowing who he is\u2014<br />\n    A man of courage\u2014<br />\n    Carving his empire<br />\n    From the cactus dotted desert hillside near Hidalgo<br />\n    Where his prized Espad\xEDn agave farm<br />\n    Crafts the finest musty Mezcal a\xF1ejo in a generation.<br />\n    Maria especially loves her father for his generosity, where<br />\n    In a land of constant struggle,<br />\n    Replete in vibrant cultural ardor, and<br />\n    Dirty flowing water in the streets<br />\n    Past hungry barefoot children,<br />\n    He welcomes strangers with work, and<br />\n    Peaceful, noble sweat-stained sleep.<br />\n    Despised by his jealous enemies,<br />\n    Maria\u2019s father smiles brightest<br />\n    Each time she enters the room.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.beganToDrift = "\n    An ice shelf cracked<br />\n    Began to drift<br />\n    Like a person after disaster.<br />\n    But hearts still warm for a smile<br />\n    And love finds a way\u2014 and sorrow.<br />\n    There\u2019s no easy way<br />\n    Along your journey,<br />\n    To believe so is deceit.<br />\n    When your last breath leaves you<br />\n    You\u2019ll know it\u2019s bittersweet.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.symphonyOfAliveness = "\n    River rocks bend to water\u2019s will<br />\n    Creating new channels, new current,<br />\n    Silver flecks green edges of riparian leaves,<br />\n    Canadian geese idly searching for treasure.<br />\n    Is the world still alive if my eyes don\u2019t observe?<br />\n    Or alive when my mind wanders and scurries?<br />\n    How many times have I walked past a river<br />\n    Blind to the symphony of aliveness?<br />\n    Worried thoughts hide present moments.<br />\n    Awareness is the gift.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.navigatingAGalaxy = "\n    While on my normal daily walk<br />\n    An orange and errant monarch butterfly<br />\n    Graced the summer sky in passing flutter,<br />\n    Navigating a galaxy of cottonwood snow<br />\n    Drifting from Idaho riverbank trees.<br />\n    Often it\u2019s the simple things<br />\n    That fills my mind with wonder.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.sheepRoam = "\n    Sheep roam hillside<br />\n    Beneath soft summer skies<br />\n    Aware of the knife in the barn.<br />\n    Sweet grass underfoot,<br />\n    Shepherds guarding each step,<br />\n    Sheep eat their fill...<br />\n    For a time.<br />\n    My mind knows the truth, that<br />\n    Men wear sheep masks,<br />\n    My heart dulls the pain<br />\n    And the blade.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.theQuietTree = "\n    There is no justice.<br />\n    You are free to choose,<br />\n    But you are not free.<br />\n    Dynastic powers manipulate<br />\n    Our beautiful world,<br />\n    Corrupting what could be.<br />\n    I\u2019m sick of superficial civility,<br />\n    I\u2019m sick of powerful elite,<br />\n    I\u2019m sick of insatiable avarice<br />\n    Burning flesh from human beings.<br />\n    There is no justice,<br />\n    There never has been,<br />\n    There never will be.<br />\n    I\u2019m a strong man, but<br />\n    There\u2019s a heaviness<br />\n    Upon my chest and shoulders<br />\n    Making it difficult to breathe.<br />\n    I want for a gentle humanity,<br />\n    I want for the quiet tree.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.waterKeepsCalm = "\n    Angular marina jetty rocks,<br />\n    Brown from harborside light reflection,<br />\n    Find symmetry in a quiet night\u2019s waterline,<br />\n    Extending the image of a rock barrier wall<br />\n    Hiding in the North Pacific December sea.<br />\n    How many days till the tsunami?<br />\n    How many days to live dreams?<br />\n    A pelican\u2019s aloft squawk rattles the shadows.<br />\n    The deep water keeps calm for a while.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.wintersThaw = "\n    Lake ice melts in the shadows of spring birch,<br />\n    Amid a new heart, smiling<br />\n    Like a clear night Alaskan-sky half moon.<br />\n    Let the water hold you<br />\n    Let your spirit dance carefree,<br />\n    Play the music loudly<br />\n    As your skip from then to now.<br />\n    Pray the sky will save you<br />\n    Pray your mind forgets,<br />\n    Trust the glassy water<br />\n    Hiding monsters in deep depths.<br />\n    Some will love you truly,<br />\n    Others fade in winter\u2019s thaw.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.diveHeadlong = "\n    The river is part roil and froth, like love<br />\n    Persistent in finding a way,<br />\n    Dangerous in all its beauty,<br />\n    Tranquil \u2018round unknown bends.<br />\n    Don\u2019t stand idly by on distant safe shores<br />\n    As the wonder passes you by.<br />\n    Descend the rocky banks cautiously,<br />\n    Dive headlong into the magic, and<br />\n    Don\u2019t forget to breathe.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.towardTheDistantMountain = "\n    Love is every footfall toward the distant mountain,<br />\n    Anxious and incomplete.<br />\n    Are we so different from the mountains?<br />\n    Reshaped by stormy days,<br />\n    Born of colliding forces,<br />\n    Immovable, yet temporary.<br />\n    I am deserts and mountains and birds,<br />\n    I am love and anger and want,<br />\n    I am, and I am not.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.washesCleanThePast = "\n    Air currents lean toward the setting Idaho sun<br />\n    Shifting to and fro like adolescent dreams,<br />\n    Shadows wrap \u2018round the bend<br />\n    Darkening the lapping waterline<br />\n    Softly flowing toward the rising sea.<br />\n    A fisherman casts hopes with a practiced flick,<br />\n    Someone splits fresh fallen kindling<br />\n    As magic warms the river rock circle, and<br />\n    Ignites the lovers\u2019 lust under a rising waxing moon.<br />\n    River days fill the boater\u2019s venerable spirit,<br />\n    River nights refresh his simple soul, and<br />\n    Tomorrow\u2019s morning dew washes clean the past.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.nearToTheCanyon = "\n    He walks slowly near to the canyon\u2019s edge,<br />\n    Sees a lone lizard tiptoe on burning rocks, and<br />\n    Birds alight from blue freedom<br />\n    Circling waterfall cirque nests before landing.<br />\n    Hot afternoon updrafts carry his weathered soul<br />\n    High overhead the snaking river,<br />\n    So many years of meandering water<br />\n    Carving white esses in desert brown walls,<br />\n    Walls painted in petroglyph red honor<br />\n    Of those who walked near to the canyon, and<br />\n    Breathed basalt Idaho Indian fires.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.wanderingWinds = "\n    If wandering winds find shelter in your heart<br />\n    Thank the birch and sweet Alaska rain,<br />\n    They have known love too\u2014<br />\n    Unafraid heroes caped in forest green\u2014<br />\n    Silent in rugged determination,<br />\n    Graceful in their sway,<br />\n    Sprouting buds of ancient hope<br />\n    Until overwhelming the forest\u2019s grateful soul.<br />\n    <br />\n    &mdash; Brett Wilcox\n    ";
          this.desertIdaho = "\n    Saying things you regret makes them<br />\n    Never unsaid,<br />\n    Setting desert Idaho sun between us\u2014<br />\n    With cirrus alight in kaleidoscope high strata<br />\n    Whispering memory is often the better lover.<br />\n    Pine trees carve tender soft angular light.<br />\n    Birds cross the fading sky orange to black.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.evenTheTruest = "\n    Even the truest sweet love<br />\n    Soaring skyward purely<br />\n    Cannot capture her entire heart,<br />\n    Nor should it, you beautiful bird.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.trustLove = "\n    Trust love and only love.<br />\n    If it destroys you<br />\n    In an unforeseen tragedy,<br />\n    You still win.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.newsSwirls = "\n    News swirls into the world<br />\n    Video after video, unending,<br />\n    Spectacular displays of force<br />\n    Of one upon another<br />\n    In ways that haunt our belief in each other.<br />\n    But I\u2019ve seen with my own eyes,<br />\n    And felt in my own life,<br />\n    Wind lifting birds in the breeze.<br />\n    So I demand of myself<br />\n    To be kind,<br />\n    As best I can.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
          this.asYouMoveBoldly = "\n    As you move boldly from this time to next<br />\n    Focus on the steps,<br />\n    Firmly advancing your decision<br />\n    Despite true worries undercutting your confidence.<br />\n    Know that love is a swifter current than fear,<br />\n    And that billowing rapids grant many safe passages.<br />\n    Trust in those who prove their loyalty,<br />\n    And judge not the jealous others silently praying for your failure,<br />\n    Their duplicitous smiles fading steadily in the growing distance.<br />\n    <br />\n    &mdash; Brett Wilcox  \n    ";
          this.dutyToAdventure = "\n    Duty to adventure is imperative<br />\n    In the greater life you seek,<br />\n    And from the windy mountain precipice<br />\n    You will see the valley muddy footprints<br />\n    That brought you to now\u2014<br />\n    A most beautiful now,<br />\n    In an uncertain late afternoon sky.<br />\n    <br />\n    &mdash; Brett Wilcox   \n    ";
        }

        _createClass(Poems, [{
          key: "getPoemsData",
          value: function getPoemsData() {
            var data = [{
              id: "now-idaho",
              img: "nowIdaho.jpg",
              title: "Now Idaho",
              poem: this.nowIdaho
            }, {
              id: "valiant-and-otherwise",
              img: "valiantAndOtherwise.jpg",
              title: "Valiant and Otherwise",
              poem: this.valiantAndOtherwise
            }, {
              id: "asteroids-orbit",
              img: "asteroidsOrbit.jpg",
              title: "Asteroids Orbit",
              poem: this.asteroidsOrbit
            }, {
              id: "dancing-silently",
              img: "dancingSilently.jpg",
              title: "Dancing Silently",
              poem: this.dancingSilently
            }, {
              id: "memories-of-another-time",
              img: "memoriesOfAnotherTime.jpg",
              title: "Memories of Another Time",
              poem: this.memoriesOfAnotherTime
            }, {
              id: "national-empire",
              img: "nationalEmpire.jpg",
              title: "National Empire",
              poem: this.nationalEmpire
            }, {
              id: "sans-anesthesia",
              img: "sansAnesthesia.jpg",
              title: "Sans Anesthesia",
              poem: this.sansAnesthesia
            }, {
              id: "missteps-of-good-intentions",
              img: "misstepsOfGoodIntentions.jpg",
              title: "Missteps of Good Intentions",
              poem: this.misstepsOfGoodIntentions
            }, {
              id: "false-horizon",
              img: "falseHorizon.jpg",
              title: "False Horizon",
              poem: this.falseHorizon
            }, {
              id: "here-before",
              img: "hereBefore.jpg",
              title: "Here Before",
              poem: this.hereBefore
            }, {
              id: "to-care",
              img: "toCare.jpg",
              title: "To Care",
              poem: this.toCare
            }, {
              id: "chaos-of-ripples",
              img: "chaosOfRipples.jpg",
              title: "Chaos of Ripples",
              poem: this.chaosOfRipples
            }, {
              id: "crippled-in-spirit",
              img: "crippledInSpirit.jpg",
              title: "Crippled in Spirit",
              poem: this.crippledInSpirit
            }, {
              id: "primordial-routine",
              img: "primordialRoutine.jpg",
              title: "Primordial Routine",
              poem: this.primordialRoutine
            }, {
              id: "a-beautiful-life",
              img: "aBeautifulLife.jpg",
              title: "A Beautiful Life",
              poem: this.aBeautifulLife
            }, {
              id: "question-time",
              img: "questionTime.jpg",
              title: "Question Time",
              poem: this.questionTime
            }, {
              id: "flaubertian-struggle",
              img: "flaubertianStruggle.jpg",
              title: "Flaubertian Struggle",
              poem: this.flaubertianStruggle
            }, {
              id: "social-amnesia",
              img: "socialAmnesia.jpg",
              title: "Social Amnesia",
              poem: this.socialAmnesia
            }, {
              id: "past-present",
              img: "pastPresent.jpg",
              title: "Past Present",
              poem: this.pastPresent
            }, {
              id: "tyranny-afoot",
              img: "tyrannyAfoot.jpg",
              title: "Tyranny Afoot",
              poem: this.tyrannyAfoot
            }, {
              id: "my-grandfathers-shop",
              img: "myGrandfathersShop.jpg",
              title: "My Grandfather's Shop",
              poem: this.myGrandfathersShop
            }, {
              id: "trespass-in-its-resplendence",
              img: "trespassInItsResplendence.jpg",
              title: "Trespass in its Resplendence",
              poem: this.trespassInItsResplendence
            }, {
              id: "its-a-choice-to-be-kind",
              img: "itsAChoiceToBeKind.jpg",
              title: "It's a Choice to be Kind",
              poem: this.itsAChoiceToBeKind
            }, {
              id: "a-man-of-courage",
              img: "aManOfCourage.jpg",
              title: "A Man of Courage",
              poem: this.aManOfCourage
            }, {
              id: "began-to-drift",
              img: "beganToDrift.jpg",
              title: "Began to Drift",
              poem: this.beganToDrift
            }, {
              id: "symphony-of-aliveness",
              img: "symphonyOfAliveness.jpg",
              title: "Symphony of Aliveness",
              poem: this.symphonyOfAliveness
            }, {
              id: "navigating-a-galaxy",
              img: "navigatingAGalaxy.jpg",
              title: "Navigating a Galaxy",
              poem: this.navigatingAGalaxy
            }, {
              id: "sheep-roam",
              img: "sheepRoam.jpg",
              title: "Sheep Roam",
              poem: this.sheepRoam
            }, {
              id: "the-quiet-tree",
              img: "theQuietTree.jpg",
              title: "The Quiet Tree",
              poem: this.theQuietTree
            }, {
              id: "water-keeps-calm",
              img: "waterKeepsCalm.jpg",
              title: "Water Keeps Calm",
              poem: this.waterKeepsCalm
            }, {
              id: "winters-thaw",
              img: "wintersThaw.jpg",
              title: "Winter's Thaw",
              poem: this.wintersThaw
            }, {
              id: "dive-headlong",
              img: "diveHeadlong.jpg",
              title: "Dive Headlong",
              poem: this.diveHeadlong
            }, {
              id: "toward-the-distant-mountain",
              img: "towardTheDistantMountain.jpg",
              title: "Toward the Distant Mountain",
              poem: this.towardTheDistantMountain
            }, {
              id: "washes-clean-the-past",
              img: "washesCleanThePast.jpg",
              title: "Washes Clean the Past",
              poem: this.washesCleanThePast
            }, {
              id: "near-to-the-canyon",
              img: "nearToTheCanyon.jpg",
              title: "Near to the Canyon",
              poem: this.nearToTheCanyon
            }, {
              id: "wandering-winds",
              img: "wanderingWinds.jpg",
              title: "Wandering Winds",
              poem: this.wanderingWinds
            }, {
              id: "desert-idaho",
              img: "desertIdaho.jpg",
              title: "Desert Idaho",
              poem: this.desertIdaho
            }, {
              id: "even-the-truest",
              img: "evenTheTruest.jpg",
              title: "Even the Truest",
              poem: this.evenTheTruest
            }, {
              id: "trust-love",
              img: "trustLove.jpg",
              title: "Trust Love",
              poem: this.trustLove
            }, {
              id: "news-swirls",
              img: "newsSwirls.jpg",
              title: "News Swirls",
              poem: this.newsSwirls
            }, {
              id: "as-you-move-boldly",
              img: "asYouMoveBoldly.jpg",
              title: "As You Move Boldly",
              poem: this.asYouMoveBoldly
            }, {
              id: "duty-to-adventure",
              img: "dutyToAdventure.jpg",
              title: "Duty to Adventure",
              poem: this.dutyToAdventure
            }];
            console.log(data);
            return data;
          }
        }]);

        return Poems;
      }(); //# sourceMappingURL=poems.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~home-home-module~view-message-view-message-module-es5.js.map