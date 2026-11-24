
const practiceQuestions = [ 
    {
        question: "国王を処刑して専制君主制を廃し、共和制を打ち立てた革命は何というか？",
        answer: "ピューリタン革命",
        choices: [
            "ピューリタン革命",
            "名誉革命",
            "七月革命",
            "二月革命"
        ]
    }
];

const englishQuestions = [
{
	type:"記述式",
	level:"★☆☆",
	question:"次の英語を日本語に直しなさい。complicated",
	answer:"複雑な",
	explanation:"complicated は「複雑な」という意味です。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"次の英語を日本語に直しなさい。garbage",
	answer:"ごみ",
	explanation:"garbage は「ごみ」という意味です。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"次の英語を日本語に直しなさい。instruction",
	answer:"指示、命令",
	explanation:"instruction は「指示、命令」という意味です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「産業廃棄物」を表すように、industrial の後に w で始まる適切な英単語を入れなさい。industrial ( w )",
	answer:"waste",
	explanation:"industrial waste で「産業廃棄物」です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「生き返る」を表すように、come back の後に適切な英単語を入れなさい。come back ( a )",
	answer:"alive",
	explanation:"come back alive で「生き返る」という意味になります。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「単純な理由」を表すように、a ( s ) reason の空所を埋めなさい。",
	answer:"simple",
	explanation:"simple reason で「単純な理由」です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「最近まで」を表す until ( ) に入る語はどれですか。",
	choices:["actually","probably","recently","gradually"],
	answer:"recently",
	explanation:"until recently は「最近まで」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「思春期の変化」を表す an ( ) change の空所に入る語はどれですか。",
	choices:["original","adolescent","imaginary","essential"],
	answer:"adolescent",
	explanation:"adolescent は「思春期の」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「道路を建設する」を表す ( ) a road の空所に入る語はどれですか。",
	choices:["construct","contribute","conduct","contain"],
	answer:"construct",
	explanation:"construct a road で「道路を建設する」です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「惑星『地球』」を表す the ( ) Earth の空所に入る語はどれですか。",
	choices:["aspect","community","treasure","planet"],
	answer:"planet",
	explanation:"planet Earth は「惑星地球」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「式に参列する」を表す attend a ( ) の空所に入る語はどれですか。",
	choices:["speech","game","ceremony","schedule"],
	answer:"ceremony",
	explanation:"attend a ceremony で「式に参列する」です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「一つ屋根の下で暮らす」を表す live under one ( ) の空所に入る語はどれですか。",
	choices:["light","seat","root","roof"],
	answer:"roof",
	explanation:"under one roof は「一つ屋根の下で」という表現です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「床を掃く」を表す sweep the ( ) の空所に入る語はどれですか。",
	choices:["floor","earth","bottom","roof"],
	answer:"floor",
	explanation:"sweep the floor で「床を掃く」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「ヒト遺伝子」を表す human ( ) の空所に入る語はどれですか。",
	choices:["religions","genes","signals","species"],
	answer:"genes",
	explanation:"gene は「遺伝子」、genes はその複数形です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「巣立つ」を表す leave the ( ) の空所に入る語はどれですか。",
	choices:["nation","nest","floor","earth"],
	answer:"nest",
	explanation:"leave the nest は「巣立つ」という表現です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「古典文学」を表す classical ( ) の空所に入る語はどれですか。",
	choices:["element","subject","literature","sentence"],
	answer:"literature",
	explanation:"classical literature は「古典文学」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「この発見が彼のその後の研究に影響を与えた。」This discovery influenced his ( ) study. 空所に入る語はどれですか。",
	choices:["subsequent","past","special","latest"],
	answer:"subsequent",
	explanation:"subsequent は「その後の」という意味です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「彼女は学校に5分遅刻した。」She was five minutes ( ) for school. 空所に入る語はどれですか。",
	choices:["tired","ready","guilty","late"],
	answer:"late",
	explanation:"be late for school で「学校に遅刻する」です。"
	},
	{
	type:"並び替え",
	level:"★★☆",
	question:"「私はその情報をインターネットで入手した。」I [ア through / イ information / ウ got / エ the ] Internet. ア～エを正しい順番に並べなさい。",
	choices:["① エ→ウ→アイ","② ウ→エ→イ→ア","③ ウ→イ→エ→ア","④ ア→ウ→エ→イ"],
	answer:"② ウ→エ→イ→ア",
	explanation:"I got the information through the Internet. となります。"
	},
	{
	type:"並び替え",
	level:"★★☆",
	question:"「流行のファッションを追うのは好きではない。」I [ア following / イ current / ウ like / エ don't / オ fashions ]. ア～オを正しい順番に並べなさい。",
	choices:["① ウ→エ→ア→イ→オ","② エ→ウ→ア→イ→オ","③ エ→ウ→イ→ア→オ","④ ウ→ア→エ→イ→オ"],
	answer:"② エ→ウ→ア→イ→オ",
	explanation:"I don't like following current fashions. となります。"
	},

	{
	type:"記述式",
	level:"★☆☆",
	question:"次の英語を日本語に直しなさい。childhood",
	answer:"幼年時代、子ども時代",
	explanation:"childhood は「幼年時代、子ども時代」という意味です。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"次の英語を日本語に直しなさい。survey（名詞）",
	answer:"調査",
	explanation:"survey は名詞で「調査」という意味です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"次の英語を日本語に直しなさい。resource(s)",
	answer:"資源",
	explanation:"resource は「資源、資産」という意味です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「窓側の座席」を表すように、a window ( s ) の空所を埋めなさい。",
	answer:"seat",
	explanation:"a window seat は「窓側の座席」です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「生命の起源」を表すように、the ( o ) of life の空所を埋めなさい。",
	answer:"origin",
	explanation:"the origin of life は「生命の起源」です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「誕生の瞬間」を表すように、the moment of ( b ) の空所を埋めなさい。",
	answer:"birth",
	explanation:"the moment of birth は「誕生の瞬間」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「逮捕される」を表す get ( ) の空所に入る語はどれですか。",
	choices:["arrested","protected","searched","managed"],
	answer:"arrested",
	explanation:"get arrested で「逮捕される」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「ベッドに横になる」を表す ( ) in bed の空所に入る語はどれですか。",
	choices:["rise","lay","lie","hang"],
	answer:"lie",
	explanation:"lie in bed は「ベッドに横になる」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「思いがけない客」を表す a ( ) guest の空所に入る語はどれですか。",
	choices:["praise","purpose","service","surprise"],
	answer:"surprise",
	explanation:"a surprise guest は「思いがけない客」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「建設用地」を表す a building ( ) の空所に入る語はどれですか。",
	choices:["traffic","gate","process","site"],
	answer:"site",
	explanation:"a building site は「建設用地、建築現場」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「障害を取り除く」を表す break down a ( ) の空所に入る語はどれですか。",
	choices:["barrier","trap","pain","function"],
	answer:"barrier",
	explanation:"break down a barrier は「障害を取り除く」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「犯罪を解決する」を表す ( ) a crime の空所に入る語はどれですか。",
	choices:["propose","predict","solve","support"],
	answer:"solve",
	explanation:"solve a crime は「犯罪を解決する」という意味です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「空っぽのグラス」を表す an ( ) glass の空所に入る語はどれですか。",
	choices:["average","ordinary","empty","equal"],
	answer:"empty",
	explanation:"empty は「空の、空っぽの」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「エネルギー源」を表す a ( ) of energy の空所に入る語はどれですか。",
	choices:["factor","section","source","record"],
	answer:"source",
	explanation:"a source of energy は「エネルギー源」です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「準備はいい？」を表す Are you ( )? の空所に入る語はどれですか。",
	choices:["pleasant","nervous","ready","hungry"],
	answer:"ready",
	explanation:"Are you ready? は「準備はいい？」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「私の赤ちゃんをベッドに寝かせる」を表す ( ) my baby on the bed の空所に入る語はどれですか。",
	choices:["lay","lie","lend","stay"],
	answer:"lay",
	explanation:"lay は「～を横たえる、寝かせる」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「もう遅い、そろそろ切るね。」It's late. I've got to ( ) up now. 空所に入る語はどれですか。",
	choices:["add","listen","start","hang"],
	answer:"hang",
	explanation:"hang up は電話を切るという意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「我々は戦争の平和的解決方法を見いださねばならない。」We must find a peaceful ( ) to the war. 空所に入る語はどれですか。",
	choices:["relation","situation","attention","solution"],
	answer:"solution",
	explanation:"solution は「解決、解決策」という意味です。"
	},
	{
	type:"並び替え",
	level:"★★☆",
	question:"「困ったことがあったらいつでも電話してね。」Call me anytime if [①trouble / ②you / ③in / ④are]. ①～④を正しい順番に並べなさい。",
	choices:["ア ②③④①","イ ④②③①","ウ ②④③①","エ ①②③④"],
	answer:"ウ ②④③①",
	explanation:"Call me anytime if you are in trouble. となります。"
	},
	{
	type:"並び替え",
	level:"★★★",
	question:"「私は彼の大成功に驚いた。」I [①at / ②success / ③his / ④great / ⑤astonished / ⑥was]. ①～⑥を正しい順番に並べなさい。",
	choices:["ア ③②①④⑤⑥","イ ⑥④⑤①③②","ウ ⑤①③②⑥④","エ ⑥⑤①③④②"],
	answer:"エ ⑥⑤①③④②",
	explanation:"I was astonished at his great success. となります。"
	},
	
	{
	type:"記述式",
	level:"★☆☆",
	question:"次の日本語を英語に直しなさい。「先の、前の」",
	answer:"previous",
	explanation:"previous は「先の、前の」という意味です。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"次の日本語を英語に直しなさい。「いつまでも、永遠に」",
	answer:"forever",
	explanation:"forever は「いつまでも、永遠に」という意味です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"次の日本語を英語に直しなさい。「責任を負わせる、～のせいにする」",
	answer:"blame",
	explanation:"blame は「～を責める、～のせいにする」という意味です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「可能性について話し合う」を表す ( d ) the possibility of A の空所を埋めなさい。",
	answer:"discuss",
	explanation:"discuss the possibility of A で「Aの可能性について話し合う」です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「狭い部屋」を表す a ( n ) room の空所を埋めなさい。",
	answer:"narrow",
	explanation:"narrow は「狭い」という意味です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"「いれたてのコーヒー」を表す ( f ) coffee の空所を埋めなさい。",
	answer:"fresh",
	explanation:"fresh coffee は「新鮮なコーヒー、いれたてのコーヒー」です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「地球の表面」を表す the ( ) of the earth の空所に入る語はどれですか。",
	choices:["bottom","surface","center","top"],
	answer:"surface",
	explanation:"the surface of the earth は「地球の表面」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「伝統的な方法」を表す a traditional ( ) の空所に入る語はどれですか。",
	choices:["affair","habit","method","size"],
	answer:"method",
	explanation:"traditional method は「伝統的な方法」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「怒った群衆」を表す an angry ( ) の空所に入る語はどれですか。",
	choices:["crop","public","crowd","custom"],
	answer:"crowd",
	explanation:"an angry crowd は「怒った群衆」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「賞賛に値する」を表す deserve ( ) の空所に入る語はどれですか。",
	choices:["praise","progress","practice","property"],
	answer:"praise",
	explanation:"deserve praise は「賞賛に値する」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「打ち解けた会話」を表す a casual ( ) の空所に入る語はどれですか。",
	choices:["scene","conversation","point","fashion"],
	answer:"conversation",
	explanation:"casual conversation は「打ち解けた会話、気軽な会話」です。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"「ページの一番下」を表す the ( ) of the page の空所に入る語はどれですか。",
	choices:["corner","top","bottom","limit"],
	answer:"bottom",
	explanation:"the bottom of the page は「ページの一番下」です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「黙ったままでいる」を表す ( ) silent の空所に入る語はどれですか。",
	choices:["remind","recommend","regard","remain"],
	answer:"remain",
	explanation:"remain silent は「黙ったままでいる」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「遅れることなく」を表す without ( ) の空所に入る語はどれですか。",
	choices:["stress","gap","risk","delay"],
	answer:"delay",
	explanation:"without delay は「遅れることなく、すぐに」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「日本を代表する」を表す ( ) Japan の空所に入る語はどれですか。",
	choices:["present","represent","preserve","respond"],
	answer:"represent",
	explanation:"represent Japan は「日本を代表する」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「船旅」を表す a sea ( ) の空所に入る語はどれですか。",
	choices:["guide","walking","task","voyage"],
	answer:"voyage",
	explanation:"a sea voyage は「船旅」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「テレビで何を見るかについて私は弟とよく言い争う。」I often ( ) with my brother about what to watch on TV. 空所に入る語はどれですか。",
	choices:["argue","warn","agree","suggest"],
	answer:"argue",
	explanation:"argue with ～ about ... は「～と…について言い争う」という意味です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"「苦労なくして成果なし」「苦は楽の種」を表す No pain, no ( ). の空所に入る語はどれですか。",
	choices:["harm","cost","factor","gain"],
	answer:"gain",
	explanation:"No pain, no gain. は「苦労なくして成果なし」という意味の表現です。"
	},
	{
	type:"並び替え",
	level:"★★☆",
	question:"「彼の年齢を考慮すべきだ。」You should [①age / ②take / ③into / ④his / ⑤account]. ①～⑤を正しい順番に並べなさい。",
	choices:["ア ⑤②①③④","イ ④②①⑤③","ウ ②①③⑤④","エ ②④①③⑤"],
	answer:"エ ②④①③⑤",
	explanation:"You should take his age into account. となります。take ～ into account で「～を考慮する」です。"
	},
	{
	type:"並び替え",
	level:"★★★",
	question:"「オードリー・ヘップバーンは1953年にアカデミー主演女優賞を受賞した。」Audrey Hepburn [①Academy / ②won / ③the / ④for / ⑤Award] Best Actress in 1953. ①～⑤を正しい順番に並べなさい。",
	choices:["ア ②③①⑤④","イ ③②①④⑤","ウ ②①③⑤④","エ ①②③④⑤"],
	answer:"ア ②③①⑤④",
	explanation:"Audrey Hepburn won the Academy Award for Best Actress in 1953. となります。"
	}

];


const mathAQuestions = [
    {
        type: "選択式",
        level: "★☆☆",
        question: "1個のサイコロを1回投げるとき、3の倍数の目が出る確率を求めなさい。",
        choices: ["1/6", "1/3", "1/2", "2/3"],
        answer: "1/3",
        explanation: "3の倍数の目は3、6の2通り。全体は6通りなので、2/6=1/3。"
    }
];

const mathIIIQuestions = [
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=x^\\alpha\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'=\\alpha x^{\\alpha-1}\\)",
            "\\(y'=\\alpha x^\\alpha\\)",
            "\\(y'=x^{\\alpha-1}\\)",
            "\\(y'=\\alpha-1\\)"
        ],
        answer: "\\(y'=\\alpha x^{\\alpha-1}\\)",
        explanation: "べき関数の導関数は、指数を前に出して、指数を1つ小さくします。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=\\sin x\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'= -\\sin x\\)",
            "\\(y'=\\cos x\\)",
            "\\(y'=\\tan x\\)",
            "\\(y'= -\\cos x\\)"
        ],
        answer: "\\(y'=\\cos x\\)",
        explanation: "正弦関数の導関数は余弦関数になります。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=\\cos x\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'=\\sin x\\)",
            "\\(y'=\\cos x\\)",
            "\\(y'= -\\sin x\\)",
            "\\(y'= -\\cos x\\)"
        ],
        answer: "\\(y'= -\\sin x\\)",
        explanation: "余弦関数の導関数は、マイナスが付いた正弦関数になります。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=\\tan x\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'=\\frac{1}{\\cos^2 x}\\)",
            "\\(y'=\\frac{1}{\\sin^2 x}\\)",
            "\\(y'=\\cos^2 x\\)",
            "\\(y'= -\\frac{1}{\\cos^2 x}\\)"
        ],
        answer: "\\(y'=\\frac{1}{\\cos^2 x}\\)",
        explanation: "正接関数の導関数は、1を余弦の2乗で割った形になります。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=\\log x\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'=\\log x\\)",
            "\\(y'=x\\)",
            "\\(y'=\\frac{1}{x}\\)",
            "\\(y'=\\frac{1}{\\log x}\\)"
        ],
        answer: "\\(y'=\\frac{1}{x}\\)",
        explanation: "自然対数の導関数は、1をxで割った形になります。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=\\log_a x\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'=\\frac{1}{x}\\)",
            "\\(y'=\\frac{1}{x\\log a}\\)",
            "\\(y'=\\frac{1}{a\\log x}\\)",
            "\\(y'=x\\log a\\)"
        ],
        answer: "\\(y'=\\frac{1}{x\\log a}\\)",
        explanation: "底がaの対数関数の導関数は、1をxとlog aの積で割った形になります。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=e^x\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'=xe^{x-1}\\)",
            "\\(y'=e^{x-1}\\)",
            "\\(y'=e^x\\)",
            "\\(y'=xe^x\\)"
        ],
        answer: "\\(y'=e^x\\)",
        explanation: "自然対数の底eを使った指数関数は、微分してもそのままです。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "関数 \\(y=a^x\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(y'=a^x\\)",
            "\\(y'=xa^{x-1}\\)",
            "\\(y'=a^x\\log a\\)",
            "\\(y'=a^{x-1}\\log a\\)"
        ],
        answer: "\\(y'=a^x\\log a\\)",
        explanation: "底がaの指数関数の導関数は、元の関数にlog aを掛けた形になります。"
    },
        {
        type: "選択式",
        level: "★★☆",
        question: "積の導関数 \\((f(x)g(x))'\\) として正しいものはどれですか。",
        choices: [
            "\\(f'(x)g(x)+f(x)g'(x)\\)",
            "\\(f'(x)g'(x)\\)",
            "\\(f'(x)+g'(x)\\)",
            "\\(f(x)g(x)\\)"
        ],
        answer: "\\(f'(x)g(x)+f(x)g'(x)\\)",
        explanation: "積の微分は、前の関数を微分したもの×後ろの関数＋前の関数×後ろの関数を微分したものです。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "関数 \\(\\frac{1}{g(x)}\\) の導関数として正しいものはどれですか。",
        choices: [
            "\\(\\frac{g'(x)}{g(x)}\\)",
            "\\(-\\frac{g'(x)}{(g(x))^2}\\)",
            "\\(\\frac{1}{g'(x)}\\)",
            "\\(\\frac{g'(x)}{(g(x))^2}\\)"
        ],
        answer: "\\(-\\frac{g'(x)}{(g(x))^2}\\)",
        explanation: "逆数の微分は、分子にマイナスを付け、分母を関数の2乗にします。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "商の導関数 \\(\\left(\\frac{f(x)}{g(x)}\\right)'\\) として正しいものはどれですか。",
        choices: [
            "\\(\\frac{f'(x)g(x)+f(x)g'(x)}{(g(x))^2}\\)",
            "\\(\\frac{f'(x)g'(x)}{g(x)}\\)",
            "\\(\\frac{f'(x)g(x)-f(x)g'(x)}{(g(x))^2}\\)",
            "\\(\\frac{f(x)g'(x)-f'(x)g(x)}{g(x)}\\)"
        ],
        answer: "\\(\\frac{f'(x)g(x)-f(x)g'(x)}{(g(x))^2}\\)",
        explanation: "商の微分は、分母の2乗を分母に置き、分子は「分子の微分×分母－分子×分母の微分」です。"
    },
        {
        type: "選択式",
        level: "★☆☆",
        question: "次の不定積分として正しいものはどれですか。\\(\\displaystyle \\int x^\\alpha dx\\)（\\(\\alpha\\neq -1\\)）",
        choices: [
            "\\(\\frac{1}{\\alpha+1}x^{\\alpha+1}+C\\)",
            "\\(\\alpha x^{\\alpha-1}+C\\)",
            "\\(\\frac{1}{\\alpha}x^\\alpha+C\\)",
            "\\(x^{\\alpha-1}+C\\)"
        ],
        answer: "\\(\\frac{1}{\\alpha+1}x^{\\alpha+1}+C\\)",
        explanation: "べき関数の不定積分は、指数に1を足して、その数で割ります。積分定数Cも忘れずに付けます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "次の不定積分として正しいものはどれですか。\\(\\displaystyle \\int \\frac{1}{x}dx\\)",
        choices: [
            "\\(\\frac{1}{x^2}+C\\)",
            "\\(\\log|x|+C\\)",
            "\\(x+C\\)",
            "\\(\\log x+C\\)"
        ],
        answer: "\\(\\log|x|+C\\)",
        explanation: "\\(\\frac{1}{x}\\) の不定積分は \\(\\log|x|+C\\) です。絶対値を付けることも重要です。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "次の不定積分として正しいものはどれですか。\\(\\displaystyle \\int \\sin x\\,dx\\)",
        choices: [
            "\\(\\cos x+C\\)",
            "\\(-\\sin x+C\\)",
            "\\(-\\cos x+C\\)",
            "\\(\\sin x+C\\)"
        ],
        answer: "\\(-\\cos x+C\\)",
        explanation: "\\(-\\cos x\\) を微分すると \\(\\sin x\\) になるため、答えは \\(-\\cos x+C\\) です。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "次の不定積分として正しいものはどれですか。\\(\\displaystyle \\int \\cos x\\,dx\\)",
        choices: [
            "\\(-\\sin x+C\\)",
            "\\(\\cos x+C\\)",
            "\\(\\sin x+C\\)",
            "\\(-\\cos x+C\\)"
        ],
        answer: "\\(\\sin x+C\\)",
        explanation: "\\(\\sin x\\) を微分すると \\(\\cos x\\) になるため、答えは \\(\\sin x+C\\) です。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "次の不定積分として正しいものはどれですか。\\(\\displaystyle \\int \\frac{1}{\\cos^2 x}dx\\)",
        choices: [
            "\\(-\\tan x+C\\)",
            "\\(\\frac{1}{\\sin^2 x}+C\\)",
            "\\(\\tan x+C\\)",
            "\\(\\cos^2 x+C\\)"
        ],
        answer: "\\(\\tan x+C\\)",
        explanation: "\\(\\tan x\\) を微分すると \\(\\frac{1}{\\cos^2 x}\\) になるため、答えは \\(\\tan x+C\\) です。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "次の不定積分として正しいものはどれですか。\\(\\displaystyle \\int e^x dx\\)",
        choices: [
            "\\(xe^x+C\\)",
            "\\(e^{x+1}+C\\)",
            "\\(e^x+C\\)",
            "\\(e^{x-1}+C\\)"
        ],
        answer: "\\(e^x+C\\)",
        explanation: "\\(e^x\\) は微分しても変わらないため、不定積分も \\(e^x+C\\) になります。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "次の不定積分として正しいものはどれですか。\\(\\displaystyle \\int a^x dx\\)",
        choices: [
            "\\(a^x\\log a+C\\)",
            "\\(\\frac{a^x}{\\log a}+C\\)",
            "\\(xa^{x-1}+C\\)",
            "\\(\\frac{a^{x+1}}{x+1}+C\\)"
        ],
        answer: "\\(\\frac{a^x}{\\log a}+C\\)",
        explanation: "\\(a^x\\) の不定積分は \\(\\frac{a^x}{\\log a}+C\\) です。"
    }
];


const electronicMeasurementControlQuestions = [
    // ==========================================
    // 1節 フィードバック制御の基礎
    // ==========================================
    {
        type: "選択式",
        level: "★☆☆",
        question: "(1) フィードバック制御の説明として、最も適切なものはどれですか。",
        choices: [
            "A. 制御対象の状態を確認せず、決められた順序だけで動作する",
            "B. 目標値と現在の状態を比較し、その差に応じて制御動作を調整する",
            "C. 目標値を設定せず、常に最大出力で動作する",
            "D. 外乱が発生したときだけ動作する"
        ],
        answer: "B. 目標値と現在の状態を比較し、その差に応じて制御動作を調整する",
        explanation: "フィードバック制御は、目標値と実際の状態を比較し、その偏差に応じて操作を調整します。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(2) 制御対象の状態を検出する役割を持つものはどれですか。",
        choices: [
            "A. 比較要素",
            "B. 操作部",
            "C. 検出部",
            "D. 制御対象"
        ],
        answer: "C. 検出部",
        explanation: "検出部は、温度や水位などの状態を検出し、フィードバック信号を得る役割を持ちます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(3) 制御対象を除いた、制御に関わる各要素を何と呼びますか。",
        choices: [
            "A. 制御装置",
            "B. 外乱",
            "C. 操作量",
            "D. 目標値"
        ],
        answer: "A. 制御装置",
        explanation: "この節では、制御対象以外の制御に関わる要素を制御装置としています。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(4) 制御対象を除いた、制御に関わる各要素を何と呼びますか。",
        choices: [
            "A. 制御装置",
            "B. 外乱",
            "C. 操作量",
            "D. 目標値"
        ],
        answer: "A. 制御装置",
        explanation: "この節では、制御対象以外の制御に関わる要素を制御装置としています。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(5) 目標値Vs=0.80V、フィードバック信号Vp=0.65Vのとき、偏差e=Vs-Vpはいくらですか。",
        choices: [
            "A. 0.15 V",
            "B. 1.45 V",
            "C. -0.15 V",
            "D. 0.65 V"
        ],
        answer: "A. 0.15 V",
        explanation: "偏差は目標値からフィードバック信号を引きます。e=0.80-0.65=0.15Vです。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(6) プロセス制御の対象として正しい組み合わせはどれですか。",
        choices: [
            "A. 液位・温度・pH",
            "B. 液位・温度・ロボットアームの角度",
            "C. 温度・ロボットアームの角度・pH",
            "D. 液位・ロボットアームの角度・pH"
        ],
        answer: "A. 液位・温度・pH",
        explanation: "液位・温度・pHはプロセス制御の例です。ロボットアームの角度制御はサーボ制御の例です。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(7) 追値制御とは、時間とともに変化する目標値に追従させる制御方式である。",
        choices: ["○", "×"],
        answer: "○",
        explanation: "追値制御では、目標値が時間とともに変化し、その変化に制御対象を追従させます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(8) 水位が目標水位より低くなり、偏差e=Vs-Vpが正になりました。このときの動作として適切なものはどれですか。",
        choices: [
            "A. 給水弁を開き、流入量を増やす",
            "B. 給水弁を閉じ、流入量を減らす",
            "C. 目標値を必ずゼロにする",
            "D. 検出部を停止する"
        ],
        answer: "A. 給水弁を開き、流入量を増やす",
        explanation: "水位が目標より低いときは、給水弁を開いて水の流入量を増やし、目標水位に近づけます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(9) 電気カーペットの温度制御で、制御したい量に当たるものはどれですか。",
        choices: [
            "A. 実際のカーペットの温度",
            "B. 設定温度と実際の温度の差だけ",
            "C. 時計の時刻",
            "D. 温度センサの種類"
        ],
        answer: "A. 実際のカーペットの温度",
        explanation: "制御したい量はカーペットの実際の温度です。設定温度と比較して加熱を調整します。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(10) プログラム制御では、目標値をあらかじめ定めたプログラムに従って変化させる。",
        choices: ["○", "×"],
        answer: "○",
        explanation: "プログラム制御では、あらかじめ決めた目標値の変化に沿って制御します。加熱炉の温度制御が例です。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(11) ロボットアームの角度制御で、目標角度を設定するものはどれですか。",
        choices: [
            "A. P2",
            "B. 差動増幅器",
            "C. P1",
            "D. サーボモータ"
        ],
        answer: "C. P1",
        explanation: "P1は目標角度を設定して目標値の電圧Vsを与えます。P2は実際の角度を検出します。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(12) 制御方式と対象の組み合わせとして正しいものはどれですか。",
        choices: [
            "A. サーボ制御―位置や角度、自動調整―電圧や電流",
            "B. 定値制御―時間とともに変化する目標値、プロセス制御―ロボットアームの角度",
            "C. サーボ制御―電圧や電流、自動調整―位置や角度",
            "D. 定値制御―時間とともに変化する目標値、自動調整―液位だけ"
        ],
        answer: "A. サーボ制御―位置や角度、自動調整―電圧や電流",
        explanation: "サーボ制御は位置や角度、自動調整は電圧・電流・速度・周波数などが例です。定値制御は目標値が一定の場合です。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(13) 目標値Vs=3.0V、フィードバック信号Vp=2.4Vのとき、偏差e=Vs-Vpはいくらですか。",
        choices: [
            "A. 5.4 V",
            "B. -0.6 V",
            "C. 2.4 V",
            "D. 0.6 V"
        ],
        answer: "D. 0.6 V",
        explanation: "e=3.0-2.4=0.6Vです。目標値からフィードバック信号を引きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(14) 制御対象の状態に影響を与える外部からの要因を何と呼びますか。",
        choices: [
            "A. 目標値",
            "B. 外乱",
            "C. 操作量",
            "D. フィードバック信号"
        ],
        answer: "B. 外乱",
        explanation: "外乱は、制御対象の状態に影響を与え、制御を難しくする要因です。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(15) フィードバック制御について正しい説明の組み合わせはどれですか。",
        choices: [
            "A. 目標値とフィードバック信号を比較し、偏差に応じて制御動作を調整する",
            "B. 現在の状態を検出せず、目標値を必ずゼロにする",
            "C. 偏差はフィードバック信号から目標値を引いて求める",
            "D. 外乱が発生したときだけ検出部が動作する"
        ],
        answer: "A. 目標値とフィードバック信号を比較し、偏差に応じて制御動作を調整する",
        explanation: "フィードバック制御では現在の状態を検出し、目標値と比較します。偏差はe=Vs-Vpで求め、その結果に応じて制御動作を調整します。"
    },

    // ==========================================
    // 2節 信号の伝達と伝達関数
    // ==========================================
    {
        type: "選択式",
        level: "★☆☆",
        question: "(16) ブロック線図を用いる目的として、最も適切なものはどれですか。",
        choices: [
            "A. 制御システムの外観を実物と同じように描くため",
            "B. 制御システムの構成要素の結合や信号の流れを分かりやすく表すため",
            "C. 制御システムの電力消費量だけを求めるため",
            "D. 制御システムからセンサをなくすため"
        ],
        answer: "B. 制御システムの構成要素の結合や信号の流れを分かりやすく表すため",
        explanation: "ブロック線図は、制御システムの構成要素や、それらの結合のしかた、信号の流れを分かりやすく表すために用います。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(17) 入力信号をX、出力信号をYとしたとき、伝達関数Hを表す式として正しいものはどれですか。",
        choices: [
            "A. H = X + Y",
            "B. H = X - Y",
            "C. H = Y / X",
            "D. H = X * Y"
        ],
        answer: "C. H = Y / X",
        explanation: "この問題で扱う伝達関数は、出力信号を入力信号で割った比です。したがってH=Y/Xとなります。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(18) ある比例要素の比例ゲインがK=4、入力信号がX=3のとき、出力信号Yの値はいくつですか。",
        choices: [
            "A. 1",
            "B. 7",
            "C. 12",
            "D. 16"
        ],
        answer: "C. 12",
        explanation: "比例要素の出力信号はY=K*Xです。Y=4*3=12となります。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(19) 伝達関数がH1、H2の2つのブロックを直列接続した場合、全体の伝達関数はH1+H2となる。",
        choices: ["○", "×"],
        answer: "×",
        explanation: "直列接続では、各ブロックの伝達関数を掛け合わせます。全体の伝達関数はH=H1*H2となります。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(20) 伝達関数がH1=2、H2=5の2つのブロックを直列接続しました。全体の伝達関数はいくつですか。",
        choices: [
            "A. 3",
            "B. 7",
            "C. 10",
            "D. 25"
        ],
        answer: "C. 10",
        explanation: "直列接続の全体の伝達関数は各ブロックの伝達関数の積です。H=2*5=10となります。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(21) ブロック線図の接続について正しい説明はどれですか。",
        choices: [
            "A. 直列接続では積、並列接続で加算する場合は和、等価変換はブロックを整理すること",
            "B. 直列接続では和、並列接続で加算する場合は積、等価変換はブロックを削除すること",
            "C. 直列接続では差、並列接続で加算する場合は積、等価変換は信号を止めること",
            "D. 直列接続では積、並列接続で加算する場合は差、等価変換はセンサをなくすこと"
        ],
        answer: "A. 直列接続では積、並列接続で加算する場合は和、等価変換はブロックを整理すること",
        explanation: "直列接続の伝達関数は積です。並列接続で信号を加算する場合は和、減算する場合は差です。複数のブロックを統合して扱いやすく整理することを等価変換といいます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(22) ブロック線図におけるフィードバック接続の説明として正しいものはどれですか。",
        choices: [
            "A. 入力信号を必ずゼロにする接続",
            "B. 出力信号を入力側に帰還させる接続",
            "C. すべてのブロックを並列に接続する方式",
            "D. 信号を伝達せず、出力だけを表示する方式"
        ],
        answer: "B. 出力信号を入力側に帰還させる接続",
        explanation: "フィードバック接続は、出力信号を伝達関数などを通して入力側に帰還させる接続方式です。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(23) 負帰還のフィードバック接続で、順方向の伝達関数P=4、帰還側の伝達関数H=1とします。閉ループ伝達関数Y/Xはいくつですか。式：Y/X=P/(1+P*H)",
        choices: [
            "A. 1 / 5",
            "B. 4 / 5",
            "C. 4",
            "D. 5"
        ],
        answer: "B. 4 / 5",
        explanation: "Y/X=4/(1+4*1)=4/5=0.8です。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(24) 入力信号に比例した量を出力する要素を何といいますか。",
        choices: [
            "A. 微分要素",
            "B. 積分要素",
            "C. 比例要素",
            "D. フィードバック要素"
        ],
        answer: "C. 比例要素",
        explanation: "比例要素は、入力信号を一定の比例定数K倍して出力する要素です。関係式はY=K*Xです。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(25) 微分要素は、入力信号を時間について微分した量に比例する出力を得る要素である。",
        choices: ["○", "×"],
        answer: "○",
        explanation: "微分要素は、入力信号の時間的な変化率に比例した出力を得る要素です。例えば、変位を時間について微分すると速度が得られます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(26) 台車の変位がX(t)=4*t-t^2で表されます。速度は変位を時間について微分して求めます。t=1秒のときの速度はいくらですか。",
        choices: [
            "A. 1 m/s",
            "B. 2 m/s",
            "C. 3 m/s",
            "D. 4 m/s"
        ],
        answer: "B. 2 m/s",
        explanation: "変位を時間について微分するとV(t)=4-2*tです。t=1を代入するとV(1)=4-2*1=2m/sとなります。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(27) 積分要素について正しい説明の組み合わせはどれですか。",
        choices: [
            "A. 入力信号の時間積分に比例する出力を得る。流量の積分で体積、電流の積分で電荷量を求められる",
            "B. 入力信号を時間について微分する。流量の積分で速度を求められる",
            "C. 入力信号を一定倍する。電流の積分で抵抗値を求められる",
            "D. 入力信号を時間について積分することはなく、変位の微分で移動距離を求められる"
        ],
        answer: "A. 入力信号の時間積分に比例する出力を得る。流量の積分で体積、電流の積分で電荷量を求められる",
        explanation: "積分要素は入力信号の時間積分に比例する出力を得ます。流量を積分すると体積、電流を積分すると電荷量を求められます。変位を微分すると速度が得られます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(28) 台車が一定の速度V=3m/sで5秒間移動しました。移動距離Xはいくらですか。",
        choices: [
            "A. 8 m",
            "B. 10 m",
            "C. 15 m",
            "D. 20 m"
        ],
        answer: "C. 15 m",
        explanation: "一定速度の場合、移動距離はX=V*tで求められます。X=3*5=15mです。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(29) ばね定数をKp、ばねの変位をX、ばねが受ける力をFとします。正しい関係式はどれですか。",
        choices: [
            "A. F = X / Kp",
            "B. F = Kp * X",
            "C. F = Kp + X",
            "D. F = Kp - X"
        ],
        answer: "B. F = Kp * X",
        explanation: "ばねが受ける力は、ばねの変位にばね定数を掛けた値です。F=Kp*Xとなります。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(30) 電気系モデルと機械系モデルの対応関係について正しい説明の組み合わせはどれですか。",
        choices: [
            "A. 電圧は力やトルク、電流は速度や角速度、インダクタンスは質量や慣性モーメントに対応する",
            "B. 電圧は速度や角速度、電流は力やトルク、インダクタンスは変位に対応する",
            "C. 電圧は変位、電流は質量、インダクタンスは力に対応する",
            "D. 電圧は電荷、電流は変位、インダクタンスは速度に対応する"
        ],
        answer: "A. 電圧は力やトルク、電流は速度や角速度、インダクタンスは質量や慣性モーメントに対応する",
        explanation: "電圧は直線運動では力、回転運動ではトルクに対応します。電流は速度や角速度、インダクタンスは質量や慣性モーメントに対応します。"
    }
    
];


const kanjiQuestions = [
    { type: "記述式", question: "「かんつう」と読む漢字を入力してください。", answer: "貫通", explanation: "貫通（かんつう）" },
    { type: "記述式", question: "「かんこ」と読む漢字を入力してください。", answer: "喚呼", explanation: "喚呼（かんこ）" },
    { type: "記述式", question: "「きっさ」と読む漢字を入力してください。", answer: "喫茶", explanation: "喫茶（きっさ）" },
    { type: "記述式", question: "「こうちょく」と読む漢字を入力してください。", answer: "硬直", explanation: "硬直（こうちょく）" },
    { type: "記述式", question: "「かかん」と読む漢字を入力してください。", answer: "果敢", explanation: "果敢（かかん）" },
    { type: "記述式", question: "「しょうそう」と読む漢字を入力してください。", answer: "焦燥", explanation: "焦燥（しょうそう）" },
    { type: "記述式", question: "「きぐう」と読む漢字を入力してください。", answer: "奇遇", explanation: "奇遇（きぐう）" },
    { type: "記述式", question: "「すいこう」と読む漢字を入力してください。", answer: "遂行", explanation: "遂行（すいこう）" },
    { type: "記述式", question: "「ちょうえつ」と読む漢字を入力してください。", answer: "超越", explanation: "超越（ちょうえつ）" },
    { type: "記述式", question: "「こよう」と読む漢字を入力してください。", answer: "雇用", explanation: "雇用（こよう）" },
    { type: "記述式", question: "「しょうちゅう」と読む漢字を入力してください。", answer: "掌中", explanation: "掌中（しょうちゅう）" },
    { type: "記述式", question: "「かいさい」と読む漢字を入力してください。", answer: "開催", explanation: "開催（かいさい）" },
    { type: "記述式", question: "「だんかい」と読む漢字を入力してください。", answer: "団塊", explanation: "団塊（だんかい）" },
    { type: "記述式", question: "「れんけい」と読む漢字を入力してください。", answer: "連携", explanation: "連携（れんけい）" },
    { type: "記述式", question: "「さくしゅ」と読む漢字を入力してください。", answer: "搾取", explanation: "搾取（さくしゅ）" },
    { type: "記述式", question: "「せっしゅ」と読む漢字を入力してください。", answer: "摂取", explanation: "摂取（せっしゅ）" },
    { type: "記述式", question: "「たいざい」と読む漢字を入力してください。", answer: "滞在", explanation: "滞在（たいざい）" },
    { type: "記述式", question: "「ようち」と読む漢字を入力してください。", answer: "幼稚", explanation: "幼稚（ようち）" },
    { type: "記述式", question: "「ほうわ」と読む漢字を入力してください。", answer: "飽和", explanation: "飽和（ほうわ）" },
    { type: "記述式", question: "「がいねん」と読む漢字を入力してください。", answer: "概念", explanation: "概念（がいねん）" },
    { type: "記述式", question: "「ゆうわく」と読む漢字を入力してください。", answer: "誘惑", explanation: "誘惑（ゆうわく）" },
    { type: "記述式", question: "「こんたん」と読む漢字を入力してください。", answer: "魂胆", explanation: "魂胆（こんたん）" },
    { type: "記述式", question: "「いしょく」と読む漢字を入力してください。", answer: "委嘱", explanation: "委嘱（いしょく）" },
    { type: "記述式", question: "「じゅんたく」と読む漢字を入力してください。", answer: "潤沢", explanation: "潤沢（じゅんたく）" },
    { type: "記述式", question: "「かんわ」と読む漢字を入力してください。", answer: "緩和", explanation: "緩和（かんわ）" },

    { type: "記述式", question: "「せんざい」と読む漢字を入力してください。", answer: "潜在", explanation: "潜在（せんざい）" },
    { type: "記述式", question: "「おうだく」と読む漢字を入力してください。", answer: "応諾", explanation: "応諾（おうだく）" },
    { type: "記述式", question: "「こころざし」と読む漢字を入力してください。", answer: "志", explanation: "志（こころざし）" },
    { type: "記述式", question: "「がし」と読む漢字を入力してください。", answer: "餓死", explanation: "餓死（がし）" },
    { type: "記述式", question: "「しんぎ」と読む漢字を入力してください。", answer: "審議", explanation: "審議（しんぎ）" },
    { type: "記述式", question: "「じゅんぽう」と読む漢字を入力してください。", answer: "遵法", explanation: "遵法（じゅんぽう）" },
    { type: "記述式", question: "「みりょう」と読む漢字を入力してください。", answer: "魅了", explanation: "魅了（みりょう）" },
    { type: "記述式", question: "「しょうげき」と読む漢字を入力してください。", answer: "衝撃", explanation: "衝撃（しょうげき）" },
    { type: "記述式", question: "「ゆうりょ」と読む漢字を入力してください。", answer: "憂慮", explanation: "憂慮（ゆうりょ）" },
    { type: "記述式", question: "「きんきゅう」と読む漢字を入力してください。", answer: "緊急", explanation: "緊急（きんきゅう）" },
    { type: "記述式", question: "「ようりつ」と読む漢字を入力してください。", answer: "擁立", explanation: "擁立（ようりつ）" },
    { type: "記述式", question: "「ぼうだい」と読む漢字を入力してください。", answer: "膨大", explanation: "膨大（ぼうだい）" },
    { type: "記述式", question: "「へいおん」と読む漢字を入力してください。", answer: "平穏", explanation: "平穏（へいおん）" },
    { type: "記述式", question: "「じばく」と読む漢字を入力してください。", answer: "自縛", explanation: "自縛（じばく）" },
    { type: "記述式", question: "「はかる」と読む漢字を入力してください。", answer: "諮る", explanation: "諮る（はかる）" },
    { type: "記述式", question: "「むほん」と読む漢字を入力してください。", answer: "謀反", explanation: "謀反（むほん）" },
    { type: "記述式", question: "「れんきん」と読む漢字を入力してください。", answer: "錬金", explanation: "錬金（れんきん）" },
    { type: "記述式", question: "「とくし」と読む漢字を入力してください。", answer: "篤志", explanation: "篤志（とくし）" },
    { type: "記述式", question: "「ぎょうしゅく」と読む漢字を入力してください。", answer: "凝縮", explanation: "凝縮（ぎょうしゅく）" },
    { type: "記述式", question: "「ふっとう」と読む漢字を入力してください。", answer: "沸騰", explanation: "沸騰（ふっとう）" },
    { type: "記述式", question: "「そせき」と読む漢字を入力してください。", answer: "礎石", explanation: "礎石（そせき）" },
    { type: "記述式", question: "「しゅうれん」と読む漢字を入力してください。", answer: "修練", explanation: "修練（しゅうれん）" },
    { type: "記述式", question: "「ほんい」と読む漢字を入力してください。", answer: "翻意", explanation: "翻意（ほんい）" },
    { type: "記述式", question: "「じょうほ」と読む漢字を入力してください。", answer: "譲歩", explanation: "譲歩（じょうほ）" },
    { type: "記述式", question: "「けいしょう」と読む漢字を入力してください。", answer: "警鐘", explanation: "警鐘（けいしょう）" },
    { type: "記述式", question: "「かいこ」と読む漢字を入力してください。", answer: "回顧", explanation: "回顧（かいこ）" }
];


// 国語一年の問題
const kokugo1Questions = [
    {
        type: "記述式",
        question: "小説『羅生門』の作者は誰ですか？",
        answer: "芥川龍之介",
        explanation: "『羅生門』は芥川龍之介の代表作の一つです。"
    },
    {
        type: "選択式",
        question: "次のうち、芥川龍之介の作品はどれですか？",
        choices: [
            "蜘蛛の糸",
            "吾輩は猫である",
            "坊っちゃん",
            "走れメロス"
        ],
        answer: "蜘蛛の糸",
        explanation: "芥川龍之介の代表作には『蜘蛛の糸』のほか、『鼻』『地獄変』などがあります。『吾輩は猫である』『坊っちゃん』は夏目漱石、『走れメロス』は太宰治の作品です。"
    },
    {
        type: "記述式",
        question: "小説『夢十夜』の作者は誰ですか？",
        answer: "夏目漱石",
        explanation: "『夢十夜』は夏目漱石が書いた、十の夢を題材にした作品です。"
    },
        // 漢字の読み問題
    {
        type: "記述式",
        question: "「条件に該当する」の「該当」の読みを入力してください。",
        answer: "がいとう",
        explanation: "該当（がいとう）"
    },
    {
        type: "記述式",
        question: "「政府の諮問機関」の「諮問」の読みを入力してください。",
        answer: "しもん",
        explanation: "諮問（しもん）"
    },
    {
        type: "記述式",
        question: "「代金を請求する」の「請求」の読みを入力してください。",
        answer: "せいきゅう",
        explanation: "請求（せいきゅう）"
    },
    {
        type: "記述式",
        question: "「要求を承諾する」の「承諾」の読みを入力してください。",
        answer: "しょうだく",
        explanation: "承諾（しょうだく）"
    },
    {
        type: "記述式",
        question: "「間違いを訂正する」の「訂正」の読みを入力してください。",
        answer: "ていせい",
        explanation: "訂正（ていせい）"
    },
    {
        type: "記述式",
        question: "「謀略を見破る」の「謀略」の読みを入力してください。",
        answer: "ぼうりゃく",
        explanation: "謀略（ぼうりゃく）"
    },
    {
        type: "記述式",
        question: "「非常口への誘導」の「誘導」の読みを入力してください。",
        answer: "ゆうどう",
        explanation: "誘導（ゆうどう）"
    },
    {
        type: "記述式",
        question: "「海賊が出没する」の「出没」の読みを入力してください。",
        answer: "しゅつぼつ",
        explanation: "出没（しゅつぼつ）"
    },
    {
        type: "記述式",
        question: "「反乱を鎮圧する」の「鎮圧」の読みを入力してください。",
        answer: "ちんあつ",
        explanation: "鎮圧（ちんあつ）"
    },
    {
        type: "記述式",
        question: "「競馬の騎手」の「騎手」の読みを入力してください。",
        answer: "きしゅ",
        explanation: "騎手（きしゅ）"
    },
    {
        type: "記述式",
        question: "「サッカーの審判」の「審判」の読みを入力してください。",
        answer: "しんぱん",
        explanation: "審判（しんぱん）"
    },
    {
        type: "記述式",
        question: "「優勝の栄冠」の「栄冠」の読みを入力してください。",
        answer: "えいかん",
        explanation: "栄冠（えいかん）"
    },
    {
        type: "記述式",
        question: "「冗談を言う」の「冗談」の読みを入力してください。",
        answer: "じょうだん",
        explanation: "冗談（じょうだん）"
    },
    {
        type: "記述式",
        question: "「生徒の名簿」の「名簿」の読みを入力してください。",
        answer: "めいぼ",
        explanation: "名簿（めいぼ）"
    },
    {
        type: "記述式",
        question: "「文章を削除する」の「削除」の読みを入力してください。",
        answer: "さくじょ",
        explanation: "削除（さくじょ）"
    },
    {
        type: "記述式",
        question: "「日本の刑法」の「刑法」の読みを入力してください。",
        answer: "けいほう",
        explanation: "刑法（けいほう）"
    },
    {
        type: "記述式",
        question: "「豪華な客船」の「豪華」の読みを入力してください。",
        answer: "ごうか",
        explanation: "豪華（ごうか）"
    },
    {
        type: "記述式",
        question: "「春菊をゆでる」の「春菊」の読みを入力してください。",
        answer: "しゅんぎく",
        explanation: "春菊（しゅんぎく）"
    },
    {
        type: "記述式",
        question: "「苗木を育てる」の「苗木」の読みを入力してください。",
        answer: "なえぎ",
        explanation: "苗木（なえぎ）"
    },
    {
        type: "記述式",
        question: "「芳香を放つ」の「芳香」の読みを入力してください。",
        answer: "ほうこう",
        explanation: "芳香（ほうこう）"
    },
    {
        type: "記述式",
        question: "「覆面をかぶる」の「覆面」の読みを入力してください。",
        answer: "ふくめん",
        explanation: "覆面（ふくめん）"
    },
    {
        type: "記述式",
        question: "「気温が零下になる」の「零下」の読みを入力してください。",
        answer: "れいか",
        explanation: "零下（れいか）"
    },
    {
        type: "記述式",
        question: "「レンズの焦点」の「焦点」の読みを入力してください。",
        answer: "しょうてん",
        explanation: "焦点（しょうてん）"
    },
    {
        type: "記述式",
        question: "「全力で疾走する」の「疾走」の読みを入力してください。",
        answer: "しっそう",
        explanation: "疾走（しっそう）"
    },
    {
        type: "記述式",
        question: "「校則を遵守する」の「遵守」の読みを入力してください。",
        answer: "じゅんしゅ",
        explanation: "遵守（じゅんしゅ）"
    },
    {
        type: "記述式",
        question: "「任務を遂行する」の「遂行」の読みを入力してください。",
        answer: "すいこう",
        explanation: "遂行（すいこう）"
    },
    {
        type: "記述式",
        question: "「敵と遭遇する」の「遭遇」の読みを入力してください。",
        answer: "そうぐう",
        explanation: "遭遇（そうぐう）"
    },
    {
        type: "記述式",
        question: "「犯人を逮捕する」の「逮捕」の読みを入力してください。",
        answer: "たいほ",
        explanation: "逮捕（たいほ）"
    },
    {
        type: "記述式",
        question: "「図書の閲覧」の「閲覧」の読みを入力してください。",
        answer: "えつらん",
        explanation: "閲覧（えつらん）"
    }
];
const kanji3Questions = [
    // ==========================================
    // 1. 漢字の読み（8問）
    // ==========================================
    {
        type: "選択式",
        level: "★☆☆",
        question: "(1) 「午睡」の読みとして正しいものはどれですか。",
        choices: ["ごすい", "ごしゅう", "うますい", "ごさい"],
        answer: "ごすい",
        explanation: "午睡は「ごすい」と読み、昼寝を意味します。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(2) 「分析」の読みとして正しいものはどれですか。",
        choices: ["ぶんせき", "ぶんさく", "ふんせき", "ぶんぜき"],
        answer: "ぶんせき",
        explanation: "分析は「ぶんせき」と読みます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(3) 「累積」の読みとして正しいものはどれですか。",
        choices: ["るいせき", "るいそく", "るせき", "るいぜき"],
        answer: "るいせき",
        explanation: "累積は「るいせき」と読み、物事が積み重なることを意味します。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(4) 「殉教者」の読みとして正しいものはどれですか。",
        choices: ["じゅんきょうしゃ", "しゅんきょうしゃ", "じゅんこうしゃ", "じゅうきょうしゃ"],
        answer: "じゅんきょうしゃ",
        explanation: "殉教者は「じゅんきょうしゃ」と読みます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(5) 「蛇行」の読みとして正しいものはどれですか。",
        choices: ["だこう", "じゃこう", "だぎょう", "しゃこう"],
        answer: "だこう",
        explanation: "蛇行は「だこう」と読み、蛇のように曲がりくねって進むことを意味します。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(6) 「由緒」の読みとして正しいものはどれですか。",
        choices: ["ゆいしょ", "ゆうしょ", "ゆいじょ", "ゆうじょ"],
        answer: "ゆいしょ",
        explanation: "由緒は「ゆいしょ」と読みます。物事の歴史やいわれを意味します。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(7) 「干潮」の読みとして正しいものはどれですか。",
        choices: ["かんちょう", "ひちょう", "かんしょう", "かんじょう"],
        answer: "かんちょう",
        explanation: "干潮は「かんちょう」と読み、潮が引いて海面が低くなることです。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(8) 「素肌」の読みとして正しいものはどれですか。",
        choices: ["すはだ", "そはだ", "すひだ", "そひだ"],
        answer: "すはだ",
        explanation: "素肌は「すはだ」と読みます。"
    },
    {
    type: "選択式",
    level: "★☆☆",
    question: "(1) 「訴訟」の読みとして正しいものはどれですか。",
    choices: ["そしょう", "そじょう", "しょしょう", "そそう"],
    answer: "そしょう",
    explanation: "訴訟は「そしょう」と読みます。裁判によって争いを解決しようとすることです。"
},
{
    type: "選択式",
    level: "★☆☆",
    question: "(2) 「風鈴」の読みとして正しいものはどれですか。",
    choices: ["ふうりん", "ふうれい", "かざりん", "ふりん"],
    answer: "ふうりん",
    explanation: "風鈴は「ふうりん」と読みます。風によって音が鳴る小さな鈴です。"
},
{
    type: "選択式",
    level: "★☆☆",
    question: "(3) 「頑丈」の読みとして正しいものはどれですか。",
    choices: ["がんじょう", "がんしょう", "かんじょう", "がんぞう"],
    answer: "がんじょう",
    explanation: "頑丈は「がんじょう」と読み、丈夫で壊れにくいことを意味します。"
},
{
    type: "選択式",
    level: "★☆☆",
    question: "(4) 「醜聞」の読みとして正しいものはどれですか。",
    choices: ["しゅうぶん", "しゅうもん", "しゅぶん", "しゅうふん"],
    answer: "しゅうぶん",
    explanation: "醜聞は「しゅうぶん」と読み、世間に知られた好ましくないうわさや事件を意味します。"
},
{
    type: "選択式",
    level: "★☆☆",
    question: "(5) 「享楽」の読みとして正しいものはどれですか。",
    choices: ["きょうらく", "こうらく", "きょうがく", "けいらく"],
    answer: "きょうらく",
    explanation: "享楽は「きょうらく」と読み、楽しみを味わうことを意味します。"
},
{
    type: "選択式",
    level: "★☆☆",
    question: "(6) 「辛相」の読みとして正しいものはどれですか。",
    choices: ["さいしょう", "しんそう", "からそう", "しんじょう"],
    answer: "さいしょう",
    explanation: "宰相は「さいしょう」と読みます。"
},
{
    type: "選択式",
    level: "★☆☆",
    question: "(7) 「献立」の読みとして正しいものはどれですか。",
    choices: ["こんだて", "けんだて", "こんりつ", "けんりつ"],
    answer: "こんだて",
    explanation: "献立は「こんだて」と読み、食事の内容や料理の組み合わせを意味します。"
},
{
    type: "選択式",
    level: "★☆☆",
    question: "(8) 「憤り」の読みとして正しいものはどれですか。",
    choices: ["ふんり", "いきり", "いきどうり", "いきどおり"],
    answer: "いきどおり",
    explanation: "憤りは「いきどおり」と読みます。"
},


   

    // ==========================================
    // 2. 漢字の書き（8問）
    // ==========================================
    {
        type: "選択式",
        level: "★☆☆",
        question: "(9) 「モウチョウ」の手術をする。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["盲腸", "猛鳥", "毛長", "網帳"],
        answer: "盲腸",
        explanation: "モウチョウは「盲腸」と書きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(10) 「センリュウ」を作って楽しむ。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["潜流", "川柳", "千竜", "千流"],
        answer: "川柳",
        explanation: "センリュウは「川柳」と書きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(11) 社会の「チツジョ」が乱れる。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["秩序", "質序", "窒序", "秩徐"],
        answer: "秩序",
        explanation: "チツジョは「秩序」と書きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(12) 内容が「ズサン」としている。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["杜撰", "図算", "途参", "土産"],
        answer: "杜撰",
        explanation: "ズサンは「杜撰」と書きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(13) 「ケショウ」をして外出する。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["化粧", "仮生", "巨匠", "旧称"],
        answer: "化粧",
        explanation: "ケショウは「化粧」と書きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(14) 英語の雑誌を「コウドク」する。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["講読", "購読", "高読", "公読"],
        answer: "講読",
        explanation: "コウドクは「講読」と書きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(15) 船上から「ウズシオ」を見る。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["渦潮", "宇潮", "潮渦", "渦汐"],
        answer: "渦潮",
        explanation: "ウズシオは「渦潮」と書きます。"
    },
    {
        type: "選択式",
        level: "★☆☆",
        question: "(16) 湯を「ワ」かしてお茶を入れる。カタカナ部分を漢字にしたものはどれですか。",
        choices: ["沸", "湧", "割", "和"],
        answer: "沸",
        explanation: "湯を沸かすの「沸」は、沸騰させるという意味です。"
    },

    // ==========================================
    // 3. 同字異訓（8組）
    // ==========================================
    {
        type: "選択式",
        level: "★★☆",
        question: "(17) 「裁」の読みの組み合わせとして正しいものはどれですか。重大な事件を裁く／布をはさみで裁つ。",
        choices: [
            "さばく／たつ",
            "たつ／さばく",
            "さいく／たつ",
            "さばく／さい"
        ],
        answer: "さばく／たつ",
        explanation: "「裁く」はさばく、「裁つ」はたつと読みます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(18) 「省」の読みの組み合わせとして正しいものはどれですか。自分自身を省みる／詳しい説明を省く。",
        choices: [
            "かえりみる／はぶく",
            "はぶく／かえりみる",
            "しょうみる／はぶく",
            "かえりみる／しょうく"
        ],
        answer: "かえりみる／はぶく",
        explanation: "「省みる」はかえりみる、「省く」ははぶくと読みます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(19) 「探」の読みの組み合わせとして正しいものはどれですか。相手の意向を探る／図書室で本を探す。",
        choices: [
            "さぐる／さがす",
            "さがす／さぐる",
            "たんる／さがす",
            "さぐる／たんす"
        ],
        answer: "さぐる／さがす",
        explanation: "「探る」はさぐる、「探す」はさがすと読みます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(20) 「担」の読みの組み合わせとして正しいものはどれですか。会長の重責を担う／野営用の荷を担ぐ。",
        choices: [
            "になう／かつぐ",
            "かつぐ／になう",
            "たんう／かつぐ",
            "になう／たんぐ"
        ],
        answer: "になう／かつぐ",
        explanation: "「担う」はになう、「担ぐ」はかつぐと読みます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(21) 「調」の読みの組み合わせとして正しいものはどれですか。料理の材料を調える／方言について調べる。",
        choices: [
            "ととのえる／しらべる",
            "しらべる／ととのえる",
            "ちょうえる／しらべる",
            "ととのえる／ちょうべる"
        ],
        answer: "ととのえる／しらべる",
        explanation: "「調える」はととのえる、「調べる」はしらべると読みます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(22) 「速」の読みの組み合わせとして正しいものはどれですか。新旧交代が速やかだ／だれよりも足が速い。",
        choices: [
            "すみやか／はやい",
            "はやい／すみやか",
            "そくやか／はやい",
            "すみやか／そくい"
        ],
        answer: "すみやか／はやい",
        explanation: "「速やか」はすみやか、「速い」ははやいと読みます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(23) 「請」の読みの組み合わせとして正しいものはどれですか。工事の注文を請ける／大先輩に教えを請う。",
        choices: [
            "うける／こう",
            "こう／うける",
            "せける／こう",
            "うける／せう"
        ],
        answer: "うける／こう",
        explanation: "「請ける」はうける、「請う」はこうと読みます。"
    },
    {
        type: "選択式",
        level: "★★☆",
        question: "(24) 「和」の読みの組み合わせとして正しいものはどれですか。やっと寒さが和らぐ／和やかな家庭で育つ。",
        choices: [
            "やわらぐ／なごやか",
            "なごやか／やわらぐ",
            "わらぐ／なごやか",
            "やわらぐ／わやか"
        ],
        answer: "やわらぐ／なごやか",
        explanation: "「和らぐ」はやわらぐ、「和やか」はなごやかと読みます。"
    }
];

// ==========================================
// 英単語テスト3年（入力式60問）
// ==========================================
const englishWordTest3 = [
     { type:"記述式", question:"(1) 平均的な家庭　an average (　　　)", answer:"household", explanation:"household は家庭・世帯です。" },
    { type:"記述式", question:"(2) ミントのような香りがする　(　　　) like mint", answer:"smell", explanation:"smell はにおいです。" },
    { type:"記述式", question:"(3) 個人的な質問　a (　　　) question", answer:"personal", explanation:"personal は個人的なです。" },
    { type:"記述式", question:"(4) 容易に利用できる　be readily (　　　)", answer:"available", explanation:"available は利用できるです。" },
    { type:"記述式", question:"(5) 違いに気づく　(　　　) the difference", answer:"notice", explanation:"notice は気づくです。" },
    { type:"記述式", question:"(6) 世論　(　　　) opinion", answer:"public", explanation:"public は公の・公共のです。" },
    { type:"記述式", question:"(7) 忍耐を必要とする　(　　　) patience", answer:"require", explanation:"require は必要とするです。" },
    { type:"記述式", question:"(8) Aとして描写される　be (　　　) as A", answer:"described", explanation:"describe は描写するです。" },
    { type:"記述式", question:"(9) ドアを通り抜けて　(　　　) the door", answer:"through", explanation:"through は～を通り抜けてです。" },
    { type:"記述式", question:"(10) 交通事故　a (　　　) accident", answer:"traffic", explanation:"traffic は交通です。" },
    { type:"記述式", question:"(11) 場合によっては　in some (　　　)", answer:"cases", explanation:"case は場合です。" },
    { type:"記述式", question:"(12) 害をもたらす　cause (　　　)", answer:"harm", explanation:"harm は害です。" },
    { type:"記述式", question:"(13) 日課　the daily (　　　)", answer:"round", explanation:"round は巡回などの意味があります。" },
    { type:"記述式", question:"(14) 健康を促進する　(　　　) health", answer:"promote", explanation:"promote は促進するです。" },
    { type:"記述式", question:"(15) それゆえに、私は行った。　(　　　), I went.", answer:"therefore", explanation:"therefore はそれゆえにです。" },
    { type:"記述式", question:"(16) 国内問題　domestic (　　　)", answer:"affairs", explanation:"affairs は事柄・情勢などです。" },
    { type:"記述式", question:"(17) 進化論　the (　　　) of evolution", answer:"theory", explanation:"theory は理論です。" },
    { type:"記述式", question:"(18) 出生率　a birth (　　　)", answer:"rate", explanation:"rate は割合・率です。" },
    { type:"記述式", question:"(19) 危険を避ける　(　　　) the danger", answer:"avoid", explanation:"avoid は避けるです。" },
    { type:"記述式", question:"(20) 多様な文化　(　　　) cultures", answer:"diverse", explanation:"diverse は多様なです。" },
    {
        type:"選択式",
        question:"(21) 心臓発作を起こす　(　　　) a heart attack",
        choices:["poop","suffer","receive","recover"],
        answer:"suffer",
        explanation:"suffer a heart attack は心臓発作を起こすという表現です。"
    },
    {
        type:"選択式",
        question:"(22) 上昇している物価　(　　　) prices",
        choices:["rising","dropping","using","losing"],
        answer:"rising",
        explanation:"rising prices は上昇している物価です。"
    },
    {
        type:"選択式",
        question:"(23) 楽譜を読むことができる be (　　　) of reading music",
        choices:["capable","creative","comfortable","correct"],
        answer:"capable",
        explanation:"be capable of は～する能力があるです。"
    },
    {
        type:"選択式",
        question:"(24) もちろんだめです　(　　　) not",
        choices:["not","almost","eventually","certainly"],
        answer:"certainly",
        explanation:"certainly は確かに・当然です。"
    },
    {
        type:"選択式",
        question:"(25) 人間の行動　human (　　　)",
        choices:["progress","behavior","favor","taste"],
        answer:"behavior",
        explanation:"behavior は行動です。"
    },
    {
        type:"選択式",
        question:"(26) Aの必要性に言及する　 (　　　) to the need for A",
        choices:["refer","with","at","from"],
        answer:"refer",
        explanation:"refer to は～に言及するです。"
    },
    {
        type:"選択式",
        question:"(27) 傑出した能力　outstanding (　　　) ",
        choices:["ability","personal","quality","ordinary"],
        answer:"ability",
        explanation:"ability は能力です。"
    },
    {
        type:"選択式",
        question:"(28) 反対方向　the (　　　) direction",
        choices:["original","official","opposite","ordinary"],
        answer:"opposite",
        explanation:"opposite は反対のです。"
    },
    {
        type:"選択式",
        question:"(29) 非常に勇気づけられる　be greatly (　　　)",
        choices:["learned","encouraged","ended","enjoyed"],
        answer:"encouraged",
        explanation:"encouraged は勇気づけられたです。"
    },
    {
        type:"選択式",
        question:"(30) くつろいだ雰囲気　a relaxed (　　　)",
        choices:["structure","culture","temperature","atmosphere"],
        answer:"atmosphere",
        explanation:"atmosphere は雰囲気です。"
    },
    {
        type:"記述式",
        question:"(31) ライフサイクル　a life (　　　)",
        answer:"cycle",
        explanation:"cycle は周期・循環です。"
    },
    {
        type:"記述式",
        question:"(32) 結果を比べる　(　　　)the  results",
        answer:"compare",
        explanation:"compare は比較するです。"
    },
    {
        type:"記述式",
        question:"(33) 自然に帰る go back to (　　　)",
        answer:"nature",
        explanation:"nature は自然です。"
    },
    {
        type:"記述式",
        question:"(34) 高度を上げる gain (　　　)",
        answer:"height",
        explanation:"height は高さです。"
    },
    {
        type:"記述式",
        question:"(35) 機嫌が悪い be in a bad (　　　)",
        answer:"mood",
        explanation:"mood は気分です。"
    },
    {
        type:"記述式",
        question:"(36) 場合によります It (　　　) ",
        answer:"depends",
        explanation:"depend on は～に依存するです。"
    },
    {
        type:"記述式",
        question:"(37) 大声で　in a (　　　) voice",
        answer:"loud",
        explanation:"loud は大きな音の・大声のです。"
    },
    {
        type:"記述式",
        question:"(38) 非常に価値がある　be (　　　) a fortune",
        answer:"worth",
        explanation:"worth は～の価値があるです。"
    },
    {
        type:"記述式",
        question:"(39) 確かに for (　　　)",
        answer:"certain",
        explanation:"certain はある・特定のです。"
    },
    {
        type:"記述式",
        question:"(40) 典型的なフランス料理レストラン a (　　　) French restaurant",
        answer:"typical",
        explanation:"typical は典型的なです。"
    },
    {
        type:"選択式",
        question:"(41) Aに気づかされる　be made (　　　) of A",
        choices:["aware","eager","hungry","available"],
        answer:"aware",
        explanation:"be made aware of は～に気づかされるです。"
    },
    {
        type:"選択式",
        question:"(42) この機会をありがたく思う　(　　　) this opportunity",
        choices:["appreciate","allowance","apparent","export"],
        answer:"appreciate",
        explanation:"appreciate は利益・恩恵です。"
    },
    {
        type:"選択式",
        question:"(43) 時事英語　(　　　) English",
        choices:["current","ancient","opposite","political"],
        answer:"current",
        explanation:"current は現在のです。"
    },
    {
        type:"選択式",
        question:"(44) 関係のある問題　a (　　　) issue",
        choices:["issue","related","severe","primary"],
        answer:"related",
        explanation:"related は 関連している です。"
    },
    {
        type:"選択式",
        question:"(45) 産業廃棄物 industrial (　　　) ",
        choices:["waste","factory","drug","grass"],
        answer:"waste",
        explanation:"waste は 廃棄物 です。"
    },
    {
        type:"選択式",
        question:"(46) 遺伝子　human (　　　)",
        choices:["religions","genes","signals","species"],
        answer:"genes",
        explanation:"genes は 遺伝子です。"
    },
    {
        type:"選択式",
        question:"(47) 資源を開発する　develop (　　　)",
        choices:["conflicts","resources","markets","environments"],
        answer:"resources",
        explanation:"resources は 資源 です。"
    },
    {
        type:"選択式",
        question:"(48) 主にAから成り立つ　(　　　) mainly of A",
        choices:["contribute","consider","construct","consist"],
        answer:"consist",
        explanation:"consist は ～から成る です。"
    },
    {
        type:"選択式",
        question:"(49) 私のせいにするな　Don't (　　　) me.",
        choices:["think","invite","attend","blame"],
        answer:"blame",
        explanation:"blame は ～のせいにする です。"
    },
    {
        type:"選択式",
        question:"(50) それはどうかな　I (　　　).",
        choices:["think","decide","wonder","fear"],
        answer:"wonder",
        explanation:"wonder は疑問に思うです。"
    },
    {
        type:"記述式",
        question:"(51) 黒のスーツを着ている　(　　　) a black suit",
        answer:"wear",
        explanation:"wear は身につけているです。"
    },
    {
        type:"記述式",
        question:"(52) 疑いなく without (　　　)",
        answer:"doubt",
        explanation:"doubt は疑いです。"
    },
    {
        type:"記述式",
        question:"(53) 記憶喪失　(　　　) of memory",
        answer:"loss",
        explanation:"loss は喪失です。"
    },
    {
        type:"記述式",
        question:"(54) 速球を投げる　(　　　) a fastball",
        answer:"throw",
        explanation:"throw は投げるです。"
    },
    {
        type:"記述式",
        question:"(55) 近づかないよう彼にアドバイスする　(　　　) him to stya away",
        answer:"advise",
        explanation:"advise は助言するです。"
    },
    {
        type:"記述式",
        question:"(56) 映画館 a movie (　　　)",
        answer:"theater",
        explanation:"theater は劇場です。"
    },
    {
        type:"記述式",
        question:"(57) ドアに鍵を掛ける　(　　　) the door",
        answer:"lock",
        explanation:"lock は鍵をかけるです。"
    },
    {
        type:"記述式",
        question:"(58) ベッドに横になる　(　　　) in bed",
        answer:"lie",
        explanation:"lie は横になるです。"
    },
    {
        type:"記述式",
        question:"(59) カルチャーショック culture (　　　)",
        answer:"shock",
        explanation:"shock は衝撃です。"
    },
    {
        type:"記述式",
        question:"(60) いれたてのコーヒー　(　　　) coffee",
        answer:"fresh",
        explanation:"fresh は新鮮なです。"
    }
];

const physicsQuestions = [

	{
	type:"選択式",
	level:"★☆☆",
	question:"ケプラーの第1法則で、惑星が描く軌道はどれですか。",
	choices:["円軌道","楕円軌道","放物線軌道","直線軌道"],
	answer:"楕円軌道",
	explanation:"惑星は太陽を1つの焦点とする楕円軌道を描きます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"ケプラーの第2法則を何といいますか。",
	answer:"面積速度一定の法則",
	explanation:"惑星と太陽を結ぶ線分が一定時間に描く面積は一定です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"ケプラーの第3法則で、惑星の公転周期Tと楕円軌道の半長軸aについて正しい関係式はどれですか。",
	choices:["T/a＝一定","T²/a³＝一定","T³/a²＝一定","Ta＝一定"],
	answer:"T²/a³＝一定",
	explanation:"公転周期の2乗と楕円軌道の半長軸の3乗の比は一定です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"2つの物体の質量をm₁、m₂、距離をr、万有引力定数をGとするとき、万有引力の大きさFを表す式を書きなさい。",
	answer:"F＝Gm₁m₂/r²",
	explanation:"万有引力は2物体の質量の積に比例し、距離の2乗に反比例します。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"万有引力の法則における比例定数Gの名称はどれですか。",
	choices:["気体定数","万有引力定数","ボルツマン定数","アボガドロ定数"],
	answer:"万有引力定数",
	explanation:"Gは万有引力定数です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"地球の質量をM、半径をR、万有引力定数をGとするとき、地表での重力加速度gを表す式を書きなさい。",
	answer:"g＝GM/R²",
	explanation:"地表での重力加速度は、地球の質量と半径を用いて表されます。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"地球の万有引力による位置エネルギーUの式として正しいものはどれですか。物体の質量をm、地球の質量をM、距離をrとします。",
	choices:["U＝GMm/r","U＝−GMm/r","U＝GMm/r²","U＝−GMm/r²"],
	answer:"U＝−GMm/r",
	explanation:"無限遠で位置エネルギーを0とすると、U＝−GMm/rです。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"地球の自転による遠心力は、万有引力に比べてどのような大きさですか。",
	choices:["無視できるほど小さい","万有引力と等しい","万有引力より大きい","常に0である"],
	answer:"無視できるほど小さい",
	explanation:"教材では、地球の自転による遠心力は万有引力に比べて無視できるほど小さいとされています。"
	},

	{
	type:"記述式",
	level:"★☆☆",
	question:"単位面積あたりに垂直にはたらく力の大きさを何といいますか。",
	answer:"圧力",
	explanation:"圧力は単位面積あたりにはたらく垂直な力です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"面積Sの面に垂直に大きさFの力がはたらくとき、圧力pを表す式を書きなさい。",
	answer:"p＝F/S",
	explanation:"圧力は力を面積で割ったものです。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"温度が一定のとき、一定質量の気体の体積Vは圧力pに反比例する。この法則を何といいますか。",
	answer:"ボイルの法則",
	explanation:"温度一定のとき、圧力と体積の積は一定です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"ボイルの法則を表す式はどれですか。",
	choices:["pV＝一定","V/T＝一定","p/T＝一定","pV/T＝一定"],
	answer:"pV＝一定",
	explanation:"温度一定では、pVが一定になります。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"圧力が一定のとき、一定質量の気体の体積Vは絶対温度Tに比例する。この法則を何といいますか。",
	answer:"シャルルの法則",
	explanation:"圧力一定のとき、体積と絶対温度の比は一定です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"シャルルの法則を表す式はどれですか。",
	choices:["pV＝一定","V/T＝一定","p/T＝一定","pV/T＝一定"],
	answer:"V/T＝一定",
	explanation:"圧力一定では、V/Tが一定になります。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"一定質量の気体について、体積Vは絶対温度Tに比例し、圧力pに反比例します。この関係を表す式はどれですか。",
	choices:["pV/T＝一定","pT/V＝一定","VT/p＝一定","pV＋T＝一定"],
	answer:"pV/T＝一定",
	explanation:"一定質量の気体では、pV/Tが一定になります。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"原子や分子などの集団を単位として扱うとき、その集団を何といいますか。",
	answer:"1モル",
	explanation:"6.02×10²³個の粒子の集団を1モルといいます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"1 molあたりの粒子の数を表す定数を何といいますか。",
	answer:"アボガドロ定数",
	explanation:"アボガドロ定数は6.02×10²³/molです。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"1 molあたりの質量を何といいますか。",
	answer:"モル質量",
	explanation:"モル質量は物質1 molあたりの質量です。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"気体定数Rの値として、教材に示されている値を書きなさい。",
	answer:"8.31 J/(mol・K)",
	explanation:"気体定数Rは8.31 J/(mol・K)です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"圧力p、体積V、物質量n、絶対温度T、気体定数Rの関係を表す理想気体の状態方程式を書きなさい。",
	answer:"pV＝nRT",
	explanation:"理想気体の状態方程式はpV＝nRTです。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"実在の気体を理想気体として扱いやすい条件はどれですか。",
	choices:["極端な低温・高圧","常温・常圧付近","極端な高温・高圧","常に理想気体として扱える"],
	answer:"常温・常圧付近",
	explanation:"常温・常圧付近では、実在の気体を理想気体とみなせます。"
	},

	{
	type:"記述式",
	level:"★★☆",
	question:"気体分子が壁Aに弾性衝突したとき、変化しない速度成分はどの方向の成分ですか。",
	answer:"y軸方向とz軸方向",
	explanation:"壁との衝突では、壁に垂直なx軸方向の速度成分だけが変化し、y軸方向とz軸方向の速度成分は変化しません。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"気体分子が壁Aに弾性衝突したとき、x軸方向の速度成分はどうなりますか。",
	choices:["大きさが2倍になる","向きが反対になる","変化しない","0になる"],
	answer:"向きが反対になる",
	explanation:"弾性衝突では、壁に垂直な方向の速度成分の向きが反対になります。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"気体分子の運動によって容器の壁が受ける圧力は、分子の速度の2乗の平均を用いてどのように表されますか。分子数をN、分子1個の質量をm、容器の体積をVとします。",
	answer:"p＝Nm v²/(3V)（v²は速度の2乗の平均）",
	explanation:"気体の圧力は、分子の数、質量、速度の2乗の平均、容器の体積によって表されます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"気体分子の平均運動エネルギーと絶対温度Tの関係を表す式を書きなさい。ボルツマン定数をkとします。",
	answer:"1/2 mv²＝3/2 kT",
	explanation:"気体分子の平均運動エネルギーは絶対温度に比例します。"
	},
	{
	type:"記述式",
	level:"★☆☆",
	question:"気体分子の平均運動エネルギーと絶対温度の関係に登場する比例定数kを何といいますか。",
	answer:"ボルツマン定数",
	explanation:"kはボルツマン定数で、教材では1.38×10⁻²³ J/Kとされています。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"気体分子の速度の2乗の平均の平方根を何といいますか。",
	answer:"二乗平均速度",
	explanation:"√(v²)を二乗平均速度といいます。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"二乗平均速度について正しい説明はどれですか。",
	choices:["気体分子の平均の速さを表す目安である","気体分子の質量を表す","気体の圧力そのものを表す","気体の体積を表す"],
	answer:"気体分子の平均の速さを表す目安である",
	explanation:"教材では二乗平均速度は気体分子の平均の速さを表す目安とされています。"
	},

	{
	type:"記述式",
	level:"★★☆",
	question:"単原子分子からなる理想気体の内部エネルギーUを、物質量n、気体定数R、絶対温度Tを用いて表しなさい。",
	answer:"U＝3/2 nRT",
	explanation:"単原子分子からなる理想気体の内部エネルギーはU＝3/2 nRTです。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"理想気体の内部エネルギーについて正しい説明はどれですか。",
	choices:["分子の熱運動によるエネルギーだけである","分子間にはたらく力によるエネルギーだけである","熱運動と分子間の力によるエネルギーの和である","気体の体積だけで決まる"],
	answer:"分子の熱運動によるエネルギーだけである",
	explanation:"理想気体では分子間にはたらく力がないものとして扱うため、内部エネルギーは分子の熱運動によるエネルギーだけになります。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"気体に外部から加えられた熱量をQ、外部から気体がされた仕事をWとするとき、熱力学の第1法則を表す式を書きなさい。",
	answer:"ΔU＝Q＋W",
	explanation:"気体が外部から熱を受け取り、外部から仕事をされると、内部エネルギーが増加します。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"気体が外部にする仕事をW'とするとき、熱力学の第1法則を表す式を書きなさい。",
	answer:"ΔU＝Q−W'",
	explanation:"気体が外部に仕事をすると、その分だけ内部エネルギーの増加が小さくなります。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"気体が外部に熱を放出するとき、熱量Qの符号はどうなりますか。",
	choices:["Q＞0","Q＜0","Q＝0","常に一定"],
	answer:"Q＜0",
	explanation:"気体から熱が放出される場合、Qは負になります。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"気体が圧縮されるとき、体積変化ΔVと外部から気体がされる仕事Wの符号はどうなりますか。",
	choices:["ΔV＞0、W＜0","ΔV＜0、W＞0","ΔV＞0、W＞0","ΔV＜0、W＜0"],
	answer:"ΔV＜0、W＞0",
	explanation:"圧縮では体積が減少し、気体は外部から仕事をされます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"断面積Sのピストンが距離ΔLだけ移動したとき、気体の体積変化ΔVを表す式を書きなさい。",
	answer:"ΔV＝SΔL",
	explanation:"体積変化は断面積とピストンの移動距離の積です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"圧力pがほぼ一定のとき、気体が外部にする仕事W'を体積変化ΔVで表しなさい。",
	answer:"W'＝pΔV",
	explanation:"一定圧力のもとでは、気体が外部にする仕事は圧力と体積変化の積です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"気体が外部にする仕事W'と、外部から気体がされる仕事Wの関係はどれですか。",
	choices:["W＝W'","W＝−W'","W＝2W'","W＝0"],
	answer:"W＝−W'",
	explanation:"外部にする仕事と外部からされる仕事は、符号が反対になります。"
	},
	{
	type:"選択式",
	level:"★☆☆",
	question:"等速円運動をする物体に、回転面に対して真横から平行な光線を当てたときにできる運動を何といいますか。",
	choices:["等加速度運動","単振動","自由落下","円運動"],
	answer:"単振動",
	explanation:"等速円運動の正射影は単振動になります。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"単振動で、振動の中心からの変位の最大値を何といいますか。",
	answer:"振幅",
	explanation:"振幅Aは振動の中心からの変位の最大値です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"単振動で、1秒間に振動する回数を何といいますか。",
	answer:"振動数",
	explanation:"振動数fは1秒間に振動する回数です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"単振動で、1回の振動に必要な時間を何といいますか。",
	answer:"周期",
	explanation:"周期Tは1回の振動に必要な時間です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"振動数fと周期Tの関係を表す式を書きなさい。",
	answer:"f＝1/T",
	explanation:"振動数は周期の逆数です。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"角振動数ωと周期Tの関係を表す式を書きなさい。",
	answer:"ω＝2π/T",
	explanation:"角振動数は2πを周期で割ったものです。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"時刻t＝0で変位が0となり、正の向きに運動を始める単振動の変位xを表す式はどれですか。",
	choices:["x＝Acosωt","x＝Asinωt","x＝−Acosωt","x＝−Asinωt"],
	answer:"x＝Asinωt",
	explanation:"教材では初期位相が0の単振動をx＝Asinωtと表しています。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"単振動の速度vを、振幅A、角振動数ω、時刻tを用いて表しなさい。",
	answer:"v＝Aωcosωt",
	explanation:"変位x＝Asinωtを時間で微分すると速度が求められます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"単振動の加速度aを、振幅A、角振動数ω、時刻tを用いて表しなさい。",
	answer:"a＝−Aω²sinωt",
	explanation:"単振動の加速度は変位と逆向きになります。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"単振動の加速度aを変位xを用いて表しなさい。",
	answer:"a＝−ω²x",
	explanation:"加速度は変位に比例し、向きは変位と反対です。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"単振動をする物体にはたらく復元力の特徴として正しいものはどれですか。",
	choices:["変位と同じ向きにはたらく","振動の中心から遠ざかる向きにはたらく","常に振動の中心に向かってはたらく","常に一定の向きにはたらく"],
	answer:"常に振動の中心に向かってはたらく",
	explanation:"復元力は物体を振動の中心に戻す役割を果たします。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"フックの法則に従う復元力Fを、比例定数Kと変位xを用いて表しなさい。",
	answer:"F＝−Kx",
	explanation:"復元力は変位に比例し、変位と反対向きにはたらきます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"ばね振り子の周期Tを、質量mとばね定数Kを用いて表しなさい。",
	answer:"T＝2π√(m/K)",
	explanation:"ばね振り子の周期は質量とばね定数によって決まります。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"ばね振り子の周期について正しいものはどれですか。",
	choices:["振幅だけで決まる","ばね定数と物体の質量だけで決まる","重力加速度だけで決まる","物体の速さだけで決まる"],
	answer:"ばね定数と物体の質量だけで決まる",
	explanation:"ばね振り子の周期は振幅には関係しません。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"鉛直ばね振り子がつりあいの位置にあるとき、重力とばねの弾性力のつりあいを表す式を書きなさい。自然の長さからの伸びをx₀とします。",
	answer:"mg＝kx₀",
	explanation:"つりあいの位置では、重力とばねの弾性力がつりあいます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"単振り子の力の接線方向の成分Fを、質量m、重力加速度g、角度θを用いて表しなさい。",
	answer:"F＝−mg sinθ",
	explanation:"単振り子の復元力は−mg sinθです。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"単振り子の振幅が十分小さいときに利用する近似式はどれですか。",
	choices:["sinθ≒θ","sinθ≒θ²","cosθ≒θ","tanθ≒θ²"],
	answer:"sinθ≒θ",
	explanation:"角度が十分小さいとき、sinθ≒θと近似できます。"
	},
	{
	type:"記述式",
	level:"★★☆",
	question:"振幅が小さい単振り子の周期Tを、糸の長さLと重力加速度gを用いて表しなさい。",
	answer:"T＝2π√(L/g)",
	explanation:"小さな振幅の単振り子の周期は糸の長さと重力加速度で決まります。"
	},
	{
	type:"選択式",
	level:"★★★",
	question:"単振り子の等時性について正しい説明はどれですか。",
	choices:["おもりの質量によって周期が変化する","振幅が大きいほど必ず周期が短くなる","振幅が小さければ周期はおもりの質量や振幅に関係しない","糸の長さに関係なく周期は一定である"],
	answer:"振幅が小さければ周期はおもりの質量や振幅に関係しない",
	explanation:"振幅が小さい場合、単振り子の周期は糸の長さと重力加速度で決まり、質量や振幅には関係しません。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"単振動をする物体の力学的エネルギーについて、教材の説明に合うものはどれですか。",
	choices:["振幅の2乗と振動数の2乗に比例する","振幅だけに比例する","振動数に反比例する","質量に関係しない"],
	answer:"振幅の2乗と振動数の2乗に比例する",
	explanation:"教材では、単振動の力学的エネルギーは振幅の2乗と振動数の2乗に比例すると説明されています。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"単振動の速度と加速度について正しいものはどれですか。",
	choices:["等速円運動の速度と加速度のx軸方向の成分から考えられる","常に同じ大きさである","速度は常に0である","加速度は変位と同じ向きである"],
	answer:"等速円運動の速度と加速度のx軸方向の成分から考えられる",
	explanation:"単振動の速度と加速度は、等速円運動の速度と加速度をx軸方向に正射影して考えられます。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"単振動の復元力の役割として正しいものはどれですか。",
	choices:["物体を振動の中心から遠ざける","物体を振動の中心に戻す","物体の質量を変える","振動の周期を0にする"],
	answer:"物体を振動の中心に戻す",
	explanation:"復元力は振動の中心からずれた物体を中心に戻す役割を果たします。"
	},
	{
	type:"選択式",
	level:"★★☆",
	question:"気体の内部エネルギーについて、温度がΔTだけ変化したときの内部エネルギーの変化ΔUを表す式はどれですか。単原子分子理想気体の場合とします。",
	choices:["ΔU＝nRΔT","ΔU＝3/2 nRΔT","ΔU＝2nRΔT","ΔU＝1/2 nRΔT"],
	answer:"ΔU＝3/2 nRΔT",
	explanation:"単原子分子理想気体の内部エネルギーの変化はΔU＝3/2 nRΔTです。"
	}



];

const practiceQuestionData = {
    "英単2年": englishQuestions,
    "英単3年": englishWordTest3,
    "数学III": mathIIIQuestions,
    "計測制御": electronicMeasurementControlQuestions,
    "国語１年": kokugo1Questions,
    "漢字2年": kanjiQuestions,
    "漢字3年": kanji3Questions,
    "物理": physicsQuestions
};
