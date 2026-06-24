// Function to create realistic SVG paintings as data URIs
        function createSunsetSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='sunGrad' cx='50%25' cy='30%25' r='40%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffe55c;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23ff6b35;stop-opacity:1'/%3E%3C/radialGradient%3E%3ClinearGradient id='skyGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff8c42'/%3E%3Cstop offset='20%25' style='stop-color:%23ffa948'/%3E%3Cstop offset='40%25' style='stop-color:%23ffc857'/%3E%3Cstop offset='60%25' style='stop-color:%23d84315;stop-opacity:0.8'/%3E%3Cstop offset='80%25' style='stop-color:%23771d32'/%3E%3Cstop offset='100%25' style='stop-color:%23440154'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23skyGrad)'/%3E%3Ccircle cx='200' cy='80' r='45' fill='url(%23sunGrad)'/%3E%3Cpath d='M80,220 Q120,200 160,220 T240,220 T320,220' fill='%23654321' opacity='0.7'/%3E%3Cpath d='M60,240 Q110,210 180,240 T350,250' fill='%235c4033' opacity='0.8'/%3E%3Cpath d='M100,270 Q160,250 220,270 T380,280' fill='%234a3728' opacity='0.85'/%3E%3Cpath d='M120,200 L160,150 L200,200' fill='%234a2511' opacity='0.75'/%3E%3Cpath d='M240,210 L300,140 L340,210' fill='%23522e1f' opacity='0.8'/%3E%3Cellipse cx='200' cy='280' rx='100' ry='60' fill='%23351c15' opacity='0.6'/%3E%3C/svg%3E`;
        }

        function createOceanSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='oceanSkyGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23fbb8c6'/%3E%3Cstop offset='15%25' style='stop-color:%23ffb6d9'/%3E%3Cstop offset='30%25' style='stop-color:%23a8edea'/%3E%3Cstop offset='50%25' style='stop-color:%2387ceeb'/%3E%3Cstop offset='75%25' style='stop-color:%234a90e2'/%3E%3Cstop offset='100%25' style='stop-color:%23005a87'/%3E%3C/linearGradient%3E%3ClinearGradient id='waveShadow' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ffffff;stop-opacity:0.3'/%3E%3Cstop offset='100%25' style='stop-color:%23000000;stop-opacity:0.2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23oceanSkyGrad)'/%3E%3Cpath d='M0,180 Q100,160 200,180 T400,180' fill='%231e90ff' opacity='0.6'/%3E%3Cpath d='M0,180 Q100,160 200,180 T400,180' fill='url(%23waveShadow)' opacity='0.5'/%3E%3Cpath d='M0,210 Q80,190 160,210 T320,210 T400,220' fill='%231873cc' opacity='0.5'/%3E%3Cpath d='M0,210 Q80,190 160,210 T320,210 T400,220' fill='%23ffffff' opacity='0.15'/%3E%3Cpath d='M0,240 Q120,220 240,240 T400,245' fill='%230d47a1' opacity='0.6'/%3E%3Cpath d='M0,240 Q120,220 240,240 T400,245' fill='%23ffffff' opacity='0.1'/%3E%3Cpath d='M0,270 Q100,250 200,270 T400,275' fill='%23003d7a' opacity='0.7'/%3E%3Cellipse cx='350' cy='100' rx='30' ry='20' fill='%23ffffff' opacity='0.6'/%3E%3C/svg%3E`;
        }

        function createUrbanSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='urbanSkyGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23c5d9f1'/%3E%3Cstop offset='100%25' style='stop-color:%238b9dc3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23urbanSkyGrad)'/%3E%3Crect x='10' y='140' width='60' height='160' fill='%234a4a4a' stroke='%23333333' stroke-width='2'/%3E%3Crect x='15' y='150' width='10' height='12' fill='%23a9a9a9' stroke='%23666' stroke-width='0.5'/%3E%3Crect x='30' y='150' width='10' height='12' fill='%23a9a9a9' stroke='%23666' stroke-width='0.5'/%3E%3Crect x='45' y='150' width='10' height='12' fill='%23a9a9a9' stroke='%23666' stroke-width='0.5'/%3E%3Crect x='15' y='170' width='10' height='12' fill='%236b6b6b' stroke='%23666' stroke-width='0.5'/%3E%3Crect x='30' y='170' width='10' height='12' fill='%236b6b6b' stroke='%23666' stroke-width='0.5'/%3E%3Crect x='90' y='100' width='80' height='200' fill='%236b6b6b' stroke='%23444' stroke-width='2'/%3E%3Crect x='100' y='115' width='12' height='15' fill='%23c9c9c9' stroke='%23555' stroke-width='0.5'/%3E%3Crect x='120' y='115' width='12' height='15' fill='%23c9c9c9' stroke='%23555' stroke-width='0.5'/%3E%3Crect x='140' y='115' width='12' height='15' fill='%23808080' stroke='%23555' stroke-width='0.5'/%3E%3Crect x='100' y='145' width='12' height='15' fill='%23c9c9c9' stroke='%23555' stroke-width='0.5'/%3E%3Crect x='200' y='120' width='75' height='180' fill='%235a5a5a' stroke='%23333' stroke-width='2'/%3E%3Crect x='210' y='135' width='13' height='15' fill='%23f0d799' stroke='%23888' stroke-width='0.5'/%3E%3Crect x='230' y='135' width='13' height='15' fill='%238a8a8a' stroke='%23888' stroke-width='0.5'/%3E%3Crect x='250' y='135' width='13' height='15' fill='%23f0d799' stroke='%23888' stroke-width='0.5'/%3E%3Crect x='310' y='150' width='70' height='150' fill='%23808080' stroke='%23555' stroke-width='2'/%3E%3Crect x='320' y='165' width='11' height='13' fill='%23c9c9c9' stroke='%23666' stroke-width='0.5'/%3E%3Crect x='338' y='165' width='11' height='13' fill='%23808080' stroke='%23666' stroke-width='0.5'/%3E%3Crect x='356' y='165' width='11' height='13' fill='%23c9c9c9' stroke='%23666' stroke-width='0.5'/%3E%3C/svg%3E`;
        }

        function createDigitalDreamsSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='dreamGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23001a4d'/%3E%3Cstop offset='30%25' style='stop-color:%23003d7a'/%3E%3Cstop offset='60%25' style='stop-color:%235c0d7a'/%3E%3Cstop offset='100%25' style='stop-color:%231a0033'/%3E%3C/linearGradient%3E%3CradialGradient id='glowOrb' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff00ff;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%23ff00ff;stop-opacity:0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23dreamGrad)'/%3E%3Ccircle cx='80' cy='70' r='35' fill='url(%23glowOrb)' opacity='0.6'/%3E%3Ccircle cx='320' cy='100' r='30' fill='%2300ffff' opacity='0.5'/%3E%3Cfilter id='blur'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='2'/%3E%3C/filter%3E%3Crect x='140' y='200' width='120' height='90' fill='none' stroke='%2300ff00' stroke-width='3' opacity='0.7' filter='url(%23blur)'/%3E%3Cpolygon points='200,40 250,110 200,160 150,110' fill='%23ffff00' opacity='0.4'/%3E%3Cpath d='M40,260 L140,210 L260,250 L370,170' stroke='%23ff0080' stroke-width='2.5' fill='none' opacity='0.6'/%3E%3Ccircle cx='200' cy='180' r='25' fill='none' stroke='%2300ffff' stroke-width='2' opacity='0.5'/%3E%3Cellipse cx='100' cy='280' rx='60' ry='30' fill='%238b0ff0' opacity='0.3'/%3E%3Cellipse cx='320' cy='250' rx='50' ry='35' fill='%2300ff88' opacity='0.2'/%3E%3C/svg%3E`;
        }

        function createVibrantAbstractionSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='vibGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b'/%3E%3Cstop offset='100%25' style='stop-color:%23ee5a6f'/%3E%3C/linearGradient%3E%3ClinearGradient id='vibGrad2' x1='100%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234ecdc4'/%3E%3Cstop offset='100%25' style='stop-color:%2345b7aa'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='%23fafafa'/%3E%3Crect x='15' y='20' width='110' height='110' fill='url(%23vibGrad1)' transform='rotate(20 70 75)' opacity='0.85'/%3E%3Ccircle cx='310' cy='75' r='65' fill='url(%23vibGrad2)' opacity='0.8'/%3E%3Cpolygon points='150,220 210,160 280,220 230,280' fill='%23ffe66d' opacity='0.7'/%3E%3Crect x='260' y='240' width='130' height='100' fill='%2395e1d3' opacity='0.75' transform='skewX(-10)'/%3E%3Ccircle cx='90' cy='280' r='45' fill='%23a29bfe' opacity='0.8'/%3E%3Cpath d='M25,140 Q100,90 180,140 T330,150' fill='%23fd79a8' opacity='0.6'/%3E%3Cellipse cx='200' cy='120' rx='80' ry='40' fill='%23f39c12' opacity='0.4'/%3E%3C/svg%3E`;
        }

        function createMixedTexturesSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='textGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e0e0e0'/%3E%3Cstop offset='100%25' style='stop-color:%23999999'/%3E%3C/linearGradient%3E%3Cpattern id='texture1' x='0' y='0' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Crect width='10' height='10' fill='%23d0d0d0'/%3E%3Ccircle cx='2' cy='2' r='1' fill='%23888888'/%3E%3Ccircle cx='7' cy='5' r='0.5' fill='%23999999'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23textGrad)'/%3E%3Crect x='20' y='20' width='160' height='160' fill='url(%23texture1)' stroke='%23888888' stroke-width='2'/%3E%3Crect x='210' y='60' width='170' height='120' fill='%23b8b8b8' opacity='0.8' stroke='%23888888' stroke-width='2'/%3E%3Cline x1='40' y1='220' x2='360' y2='220' stroke='%23666666' stroke-width='4' opacity='0.7'/%3E%3Cline x1='50' y1='245' x2='350' y2='245' stroke='%23888888' stroke-width='3' opacity='0.6'/%3E%3Crect x='50' y='270' width='300' height='70' fill='%23707070' opacity='0.7' stroke='%23555555' stroke-width='1'/%3E%3Ccircle cx='200' cy='305' r='40' fill='%23909090' opacity='0.8'/%3E%3Cellipse cx='280' cy='150' rx='60' ry='40' fill='%23a8a8a8' opacity='0.6'/%3E%3C/svg%3E`;
        }

        function createPortraitSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='skinGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e8c4a0'/%3E%3Cstop offset='100%25' style='stop-color:%23d4a574'/%3E%3C/linearGradient%3E%3CradialGradient id='cheekGlow' cx='35%25' cy='45%25' r='35%25'%3E%3Cstop offset='0%25' style='stop-color:%23e8b4a0;stop-opacity:0.6'/%3E%3Cstop offset='100%25' style='stop-color:%23d4a574;stop-opacity:0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='%23ede7d9'/%3E%3Cellipse cx='200' cy='110' rx='52' ry='65' fill='url(%23skinGrad)'/%3E%3Cellipse cx='200' cy='110' rx='52' ry='65' fill='url(%23cheekGlow)' opacity='0.5'/%3E%3Ccircle cx='175' cy='100' r='9' fill='%23594848' opacity='0.8'/%3E%3Ccircle cx='225' cy='100' r='9' fill='%23594848' opacity='0.8'/%3E%3Ccircle cx='175' cy='102' r='5' fill='%23000000' opacity='0.9'/%3E%3Ccircle cx='225' cy='102' r='5' fill='%23000000' opacity='0.9'/%3E%3Ccircle cx='177' cy='98' r='2' fill='%23ffffff' opacity='0.7'/%3E%3Ccircle cx='227' cy='98' r='2' fill='%23ffffff' opacity='0.7'/%3E%3Cpath d='M200,135 L200,148' stroke='%23a0826d' stroke-width='2.5' fill='none'/%3E%3Cpath d='M185,160 Q200,168 215,160' stroke='%23d4956a' stroke-width='2.5' fill='none' opacity='0.8'/%3E%3Cpath d='M135,190 Q200,170 265,190' stroke='%23c9956a' stroke-width='3' fill='none' opacity='0.7'/%3E%3Crect x='110' y='210' width='180' height='120' fill='%23a8765d' opacity='0.8'/%3E%3Cellipse cx='200' cy='150' rx='30' ry='20' fill='%23f4ccb8' opacity='0.5'/%3E%3C/svg%3E`;
        }

        function createFloralSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='floralBg' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5fff0'/%3E%3Cstop offset='100%25' style='stop-color:%23e0f7e0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23floralBg)'/%3E%3Cline x1='100' y1='310' x2='100' y2='160' stroke='%23558844' stroke-width='3' opacity='0.8'/%3E%3Cellipse cx='75' cy='160' rx='8' ry='6' fill='%23228844' opacity='0.6'/%3E%3Cellipse cx='115' cy='160' rx='8' ry='6' fill='%23228844' opacity='0.6'/%3E%3Ccircle cx='85' cy='145' r='16' fill='%23ff69b4' opacity='0.85'/%3E%3Ccircle cx='100' cy='130' r='19' fill='%23ff1493' opacity='0.9'/%3E%3Ccircle cx='115' cy='145' r='16' fill='%23ffb6c1' opacity='0.8'/%3E%3Ccircle cx='92' cy='142' r='5' fill='%23ffeb3b' opacity='0.7'/%3E%3Cline x1='280' y1='310' x2='280' y2='180' stroke='%23558844' stroke-width='3' opacity='0.8'/%3E%3Cellipse cx='255' cy='180' rx='8' ry='7' fill='%23228844' opacity='0.6'/%3E%3Cellipse cx='300' cy='180' rx='8' ry='7' fill='%23228844' opacity='0.6'/%3E%3Ccircle cx='265' cy='168' r='15' fill='%23ffd700' opacity='0.85'/%3E%3Ccircle cx='280' cy='150' r='18' fill='%23ffa500' opacity='0.9'/%3E%3Ccircle cx='295' cy='168' r='15' fill='%23ff8c00' opacity='0.85'/%3E%3Ccircle cx='280' cy='158' r='5' fill='%23ffeb3b' opacity='0.7'/%3E%3Cline x1='200' y1='310' x2='200' y2='130' stroke='%23558844' stroke-width='2.5' opacity='0.8'/%3E%3Cellipse cx='180' cy='130' rx='7' ry='5' fill='%23228844' opacity='0.6'/%3E%3Cellipse cx='218' cy='130' rx='7' ry='5' fill='%23228844' opacity='0.6'/%3E%3Ccircle cx='190' cy='118' r='13' fill='%234169e1' opacity='0.85'/%3E%3Ccircle cx='200' cy='103' r='15' fill='%236495ed' opacity='0.9'/%3E%3Ccircle cx='210' cy='118' r='13' fill='%238a2be2' opacity='0.85'/%3E%3C/svg%3E`;
        }

        function createDetailedLandscapeSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='charcoalGrad' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23555555'/%3E%3Cstop offset='50%25' style='stop-color:%23404040'/%3E%3Cstop offset='100%25' style='stop-color:%23262626'/%3E%3C/linearGradient%3E%3Cpattern id='charcoal' x='0' y='0' width='15' height='15' patternUnits='userSpaceOnUse'%3E%3Crect width='15' height='15' fill='%23333333'/%3E%3Ccircle cx='3' cy='3' r='0.5' fill='%23666666'/%3E%3Ccircle cx='10' cy='7' r='0.5' fill='%23555555'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23charcoalGrad)'/%3E%3Cpolygon points='80,170 180,90 270,170' fill='%23545454' stroke='%23333333' stroke-width='1.5' opacity='0.9'/%3E%3Cpolygon points='250,190 320,120 380,190' fill='%23474747' stroke='%23222222' stroke-width='1.5' opacity='0.85'/%3E%3Cpolygon points='20,190 90,160 140,200' fill='%23383838' stroke='%23111111' stroke-width='1.5' opacity='0.8'/%3E%3Crect x='20' y='240' width='360' height='110' fill='url(%23charcoal)' opacity='0.8'/%3E%3Cline x1='50' y1='250' x2='350' y2='250' stroke='%23555555' stroke-width='2' opacity='0.7'/%3E%3Cline x1='40' y1='280' x2='360' y2='280' stroke='%23444444' stroke-width='1.5' opacity='0.6'/%3E%3Cpath d='M30,310 L50,295 L75,315 L95,300 L120,320' stroke='%23666666' stroke-width='1' fill='none' opacity='0.7'/%3E%3Cpath d='M150,305 L170,290 L195,310 L215,295 L240,315' stroke='%23666666' stroke-width='1' fill='none' opacity='0.6'/%3E%3Cpath d='M260,308 L280,295 L305,312' stroke='%23666666' stroke-width='1' fill='none' opacity='0.65'/%3E%3C/svg%3E`;
        }

        function createNeonCitySVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CfilterGradient id='neonBlur'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='1.5'/%3E%3C/filterGradient%3E%3ClinearGradient id='darkNight' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23000000'/%3E%3Cstop offset='50%25' style='stop-color:%23001a33'/%3E%3Cstop offset='100%25' style='stop-color:%23000000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23darkNight)'/%3E%3Crect x='25' y='110' width='50' height='160' fill='%23001a00' stroke='%2300ff00' stroke-width='2.5' filter='url(%23neonBlur)' opacity='0.9'/%3E%3Crect x='25' y='110' width='50' height='160' fill='none' stroke='%2300ff00' stroke-width='1.5' opacity='0.6'/%3E%3Crect x='95' y='70' width='60' height='200' fill='%231a0033' stroke='%23ff00ff' stroke-width='2.5' opacity='0.85'/%3E%3Crect x='95' y='70' width='60' height='200' fill='none' stroke='%23ff00ff' stroke-width='1' opacity='0.4'/%3E%3Crect x='170' y='90' width='55' height='180' fill='%230a1a2e' stroke='%2300ffff' stroke-width='2.5' opacity='0.8'/%3E%3Crect x='170' y='90' width='55' height='180' fill='none' stroke='%2300ffff' stroke-width='1' opacity='0.5'/%3E%3Crect x='255' y='130' width='65' height='140' fill='%231a1a00' stroke='%23ffff00' stroke-width='2.5' opacity='0.85'/%3E%3Crect x='255' y='130' width='65' height='140' fill='none' stroke='%23ffff00' stroke-width='1' opacity='0.6'/%3E%3Cline x1='0' y1='280' x2='400' y2='280' stroke='%23ff0080' stroke-width='3' opacity='0.7'/%3E%3Cline x1='0' y1='280' x2='400' y2='280' stroke='%23ff0080' stroke-width='1' opacity='0.3' filter='url(%23neonBlur)'/%3E%3Cline x1='0' y1='305' x2='400' y2='305' stroke='%2300ff00' stroke-width='2' opacity='0.6'/%3E%3Cline x1='0' y1='305' x2='400' y2='305' stroke='%2300ff00' stroke-width='0.5' opacity='0.2' filter='url(%23neonBlur)'/%3E%3C/svg%3E`;
        }

        function createAbstractEmotionSVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='emotGrad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5f5f5'/%3E%3Cstop offset='100%25' style='stop-color:%23e0e0e0'/%3E%3C/linearGradient%3E%3ClinearGradient id='emotRed' x1='0%25' y1='0%25' x2='100%25' y2='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23e74c3c'/%3E%3Cstop offset='100%25' style='stop-color:%23c0392b'/%3E%3C/linearGradient%3E%3ClinearGradient id='emotBlue' x1='0%25' y1='50%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%233498db'/%3E%3Cstop offset='100%25' style='stop-color:%232980b9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23emotGrad1)'/%3E%3Cpath d='M30,80 Q120,40 210,80 T380,90' fill='url(%23emotRed)' opacity='0.7' stroke='%23a93226' stroke-width='1'/%3E%3Cpath d='M20,140 Q100,110 180,140 T360,160' fill='%23e67e22' opacity='0.6' stroke='%23c87f0a' stroke-width='1'/%3E%3Cpolygon points='70,240 140,180 220,240 160,290' fill='%239b59b6' opacity='0.65' stroke='%236c3483' stroke-width='1'/%3E%3Ccircle cx='310' cy='220' r='55' fill='%23f39c12' opacity='0.55' stroke='%23ca6f1e' stroke-width='1.5'/%3E%3Crect x='10' y='280' width='380' height='50' fill='%231abc9c' opacity='0.5' stroke='%2316a085' stroke-width='1' transform='skewX(-5)'/%3E%3Cellipse cx='150' cy='110' rx='70' ry='40' fill='%23c0392b' opacity='0.25'/%3E%3Cellipse cx='320' cy='280' rx='80' ry='35' fill='%238e44ad' opacity='0.2'/%3E%3C/svg%3E`;
        }

        function createHarmonySVG() {
            return `data:image/svg+xml,%3Csvg viewBox='0 0 400 350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='harmonyBg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f0f2f5'/%3E%3Cstop offset='100%25' style='stop-color:%23d8dfe8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23harmonyBg)'/%3E%3Ccircle cx='85' cy='95' r='45' fill='%232c3e50' opacity='0.75' stroke='%231a252f' stroke-width='2'/%3E%3Ccircle cx='315' cy='95' r='45' fill='%232c3e50' opacity='0.75' stroke='%231a252f' stroke-width='2'/%3E%3Crect x='140' y='115' width='120' height='130' fill='%2334495e' opacity='0.7' stroke='%231a252f' stroke-width='2' transform='rotate(-5 200 180)'/%3E%3Cpolygon points='200,245 140,310 260,310' fill='%232c3e50' opacity='0.8' stroke='%231a252f' stroke-width='1.5'/%3E%3Ccircle cx='200' cy='165' r='35' fill='%238e44ad' opacity='0.6' stroke='%236c3483' stroke-width='1.5'/%3E%3Cpath d='M80,185 Q200,180 320,185' stroke='%232c3e50' stroke-width='2.5' fill='none' opacity='0.7'/%3E%3Cellipse cx='200' cy='280' rx='110' ry='40' fill='%2395a5a6' opacity='0.3'/%3E%3Ccircle cx='120' cy='240' r='25' fill='%237f8c8d' opacity='0.4'/%3E%3Ccircle cx='280' cy='240' r='25' fill='%237f8c8d' opacity='0.4'/%3E%3C/svg%3E`;
        }

        // Artwork Database
        const artworks = [
            {
                id: 1,
                title: "Sunset Over Mountains",
                artist: "Sarah Mitchell",
                category: "oil",
                year: 2023,
                medium: "Oil on Canvas",
                dimensions: "80x60 cm",
                price: 2500,
                image: createSunsetSVG(),
                description: "A breathtaking landscape capturing the golden hour over majestic mountain peaks.",
                popularity: 95
            },
            {
                id: 2,
                title: "Ocean Waves",
                artist: "James Chen",
                category: "watercolor",
                year: 2024,
                medium: "Watercolor",
                dimensions: "70x50 cm",
                price: 1800,
                image: createOceanSVG(),
                description: "A serene watercolor depicting the peaceful rhythm of ocean waves at dawn.",
                popularity: 88
            },
            {
                id: 3,
                title: "Urban Sketches",
                artist: "Elena Rodriguez",
                category: "sketches",
                year: 2023,
                medium: "Graphite Pencil",
                dimensions: "40x50 cm",
                price: 450,
                image: createUrbanSVG(),
                description: "A series of urban architectural studies drawn in fine graphite pencil.",
                popularity: 72
            },
            {
                id: 4,
                title: "Digital Dreams",
                artist: "Marcus Lee",
                category: "digital",
                year: 2024,
                medium: "Digital",
                dimensions: "100x75 cm",
                price: 1200,
                image: createDigitalDreamsSVG(),
                description: "An imaginative digital artwork blending surrealism with modern aesthetics.",
                popularity: 85
            },
            {
                id: 5,
                title: "Vibrant Abstraction",
                artist: "Sofia Larsson",
                category: "acrylic",
                year: 2023,
                medium: "Acrylic on Canvas",
                dimensions: "90x90 cm",
                price: 3200,
                image: createVibrantAbstractionSVG(),
                description: "Bold and expressive abstract work using vibrant acrylic colors.",
                popularity: 92
            },
            {
                id: 6,
                title: "Mixed Textures",
                artist: "David Park",
                category: "mixed",
                year: 2024,
                medium: "Mixed Media",
                dimensions: "60x80 cm",
                price: 1950,
                image: createMixedTexturesSVG(),
                description: "An experimental mixed media piece combining various materials and techniques.",
                popularity: 78
            },
            {
                id: 7,
                title: "Portrait of Grace",
                artist: "Isabella Romano",
                category: "oil",
                year: 2023,
                medium: "Oil on Canvas",
                dimensions: "70x85 cm",
                price: 3500,
                image: createPortraitSVG(),
                description: "An elegant portrait capturing the essence of grace and elegance.",
                popularity: 90
            },
            {
                id: 8,
                title: "Floral Garden",
                artist: "Maya Patel",
                category: "watercolor",
                year: 2024,
                medium: "Watercolor",
                dimensions: "55x75 cm",
                price: 1500,
                image: createFloralSVG(),
                description: "A delicate watercolor garden filled with blooming flowers and soft colors.",
                popularity: 80
            },
            {
                id: 9,
                title: "Detailed Landscape",
                artist: "Thomas Anderson",
                category: "sketches",
                year: 2023,
                medium: "Charcoal",
                dimensions: "65x90 cm",
                price: 800,
                image: createDetailedLandscapeSVG(),
                description: "A highly detailed landscape sketch rendered in charcoal.",
                popularity: 75
            },
            {
                id: 10,
                title: "Neon City",
                artist: "Alex Zhang",
                category: "digital",
                year: 2024,
                medium: "Digital",
                dimensions: "120x80 cm",
                price: 1600,
                image: createNeonCitySVG(),
                description: "A futuristic cityscape rendered in vibrant neon colors.",
                popularity: 87
            },
            {
                id: 11,
                title: "Abstract Emotion",
                artist: "Lucia Moretti",
                category: "acrylic",
                year: 2023,
                medium: "Acrylic on Canvas",
                dimensions: "100x70 cm",
                price: 2800,
                image: createAbstractEmotionSVG(),
                description: "An emotional abstract piece expressing inner feelings through color and form.",
                popularity: 86
            },
            {
                id: 12,
                title: "Harmony",
                artist: "Benjamin Woods",
                category: "mixed",
                year: 2024,
                medium: "Mixed Media",
                dimensions: "80x60 cm",
                price: 2100,
                image: createHarmonySVG(),
                description: "A harmonious mixed media composition exploring balance and unity.",
                popularity: 82
            }
        ];

        // Artists Database
        const artists = [
            {
                id: 1,
                name: "Sarah Mitchell",
                specialty: "Oil Paintings",
                image: "images/upcoming-art-1.jpg",
                description: "Award-winning oil painter specializing in landscapes and natural light."
            },
            {
                id: 2,
                name: "James Chen",
                specialty: "Watercolor Art",
                image: "images/upcoming-art-1.jpg",
                description: "Contemporary watercolor artist creating serene and expressive works."
            },
            {
                id: 3,
                name: "Elena Rodriguez",
                specialty: "Sketches & Drawings",
                image: "images/upcoming-art-1.jpg",
                description: "Master draughtsman known for detailed architectural and figure studies."
            },
            {
                id: 4,
                name: "Marcus Lee",
                specialty: "Digital Art",
                image: "images/upcoming-art-1.jpg",
                description: "Innovative digital artist pushing the boundaries of modern art."
            },
            {
                id: 5,
                name: "Sofia Larsson",
                specialty: "Abstract & Acrylic",
                image: "images/upcoming-art-1.jpg",
                description: "Bold abstract artist exploring color theory and emotional expression."
            },
            {
                id: 6,
                name: "David Park",
                specialty: "Mixed Media",
                image: "images/upcoming-art-1.jpg",
                description: "Experimental artist combining traditional and contemporary techniques."
            }
        ];

        // State Management
        let cart = [];
        let favorites = [];
        let currentArtwork = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            loadFromLocalStorage();
            renderFeatured();
            renderArtworks(artworks);
            renderArtists();
            setupEventListeners();
            updateBadges();
        });

        // Setup Event Listeners
        function setupEventListeners() {
            // Search
            document.getElementById('search-btn').addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('search-bar').classList.toggle('active');
            });

            document.getElementById('search-close').addEventListener('click', () => {
                document.getElementById('search-bar').classList.remove('active');
            });

            document.getElementById('search-input').addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                const filtered = artworks.filter(a => 
                    a.title.toLowerCase().includes(query) ||
                    a.artist.toLowerCase().includes(query) ||
                    a.medium.toLowerCase().includes(query)
                );
                renderArtworks(filtered);
            });

            // Filters
            document.getElementById('category-filter').addEventListener('change', applyFilters);
            document.getElementById('sort-filter').addEventListener('change', applyFilters);

            // Cart
            document.getElementById('cart-btn').addEventListener('click', (e) => {
                e.preventDefault();
                openCartModal();
            });

            // Favorites
            document.getElementById('favorites-btn').addEventListener('click', (e) => {
                e.preventDefault();
                const favorited = artworks.filter(a => favorites.includes(a.id));
                renderArtworks(favorited);
                document.getElementById('search-bar').classList.remove('active');
            });

            // Category Cards
            document.querySelectorAll('.category-card').forEach(card => {
                card.addEventListener('click', () => {
                    const category = card.dataset.category;
                    document.getElementById('category-filter').value = category;
                    applyFilters();
                    document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Contact Form
            document.getElementById('contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                e.target.reset();
            });

            // Modal Close Buttons
            document.querySelectorAll('.close-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.target.closest('.modal').classList.remove('active');
                });
            });

            // Modal Background Click
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                    }
                });
            });

            // Product Modal Actions
            document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
            document.getElementById('add-to-favorites-btn').addEventListener('click', toggleFavorite);
        }

        // Render Featured Artworks
        function renderFeatured() {
            const grid = document.getElementById('featured-grid');
            const featured = artworks.slice(0, 3);

            grid.innerHTML = featured.map(artwork => `
                <div class="featured-card" data-id="${artwork.id}">
                    <img src="${artwork.image}" alt="${artwork.title}" class="featured-image">
                    <div class="featured-info">
                        <h3 class="featured-title">${artwork.title}</h3>
                        <p class="featured-artist">by ${artwork.artist}</p>
                        <p class="featured-price">$${artwork.price.toLocaleString()}</p>
                    </div>
                </div>
            `).join('');

            document.querySelectorAll('.featured-card').forEach(card => {
                card.addEventListener('click', () => {
                    const id = parseInt(card.dataset.id);
                    const artwork = artworks.find(a => a.id === id);
                    openArtModal(artwork);
                });
            });
        }

        // Render Artworks
        function renderArtworks(artworksToRender) {
            const grid = document.getElementById('artwork-grid');
            grid.innerHTML = '';

            if (artworksToRender.length === 0) {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #7f8c8d;">No artworks found.</p>';
                return;
            }

            artworksToRender.forEach(artwork => {
                const card = document.createElement('div');
                card.className = 'artwork-card';
                card.innerHTML = `
                    <div class="artwork-image" style="background-image: url('${artwork.image}'); background-size: cover;">
                        <img src="${artwork.image}" alt="${artwork.title}" style="width: 100%; height: 100%; object-fit: cover;">
                        <div class="artwork-overlay">
                            <div class="overlay-buttons">
                                <button class="overlay-btn view-btn" data-id="${artwork.id}">👁️</button>
                                <button class="overlay-btn favorite-btn ${favorites.includes(artwork.id) ? 'active' : ''}" data-id="${artwork.id}">❤️</button>
                                <button class="overlay-btn cart-btn" data-id="${artwork.id}">🛒</button>
                            </div>
                        </div>
                    </div>
                    <div class="artwork-info">
                        <h3 class="artwork-title">${artwork.title}</h3>
                        <p class="artwork-artist">${artwork.artist}</p>
                        <div class="artwork-meta">
                            <span class="artwork-medium">${artwork.medium}</span>
                            <span class="artwork-price">$${artwork.price.toLocaleString()}</span>
                        </div>
                    </div>
                `;

                card.querySelector('.view-btn').addEventListener('click', () => openArtModal(artwork));
                card.querySelector('.favorite-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleFavoriteArtwork(artwork.id, e.target.closest('button'));
                });
                card.querySelector('.cart-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    addArtworkToCart(artwork);
                });

                grid.appendChild(card);
            });
        }

        // Render Artists
        function renderArtists() {
            const grid = document.getElementById('artists-grid');

            grid.innerHTML = artists.map(artist => `
                <div class="artist-card">
                    <img src="${artist.image}" alt="${artist.name}" class="artist-image">
                    <div class="artist-info">
                        <h3 class="artist-name">${artist.name}</h3>
                        <p class="artist-specialty">${artist.specialty}</p>
                        <p class="artist-description">${artist.description}</p>
                        <div class="artist-social">
                            <a href="#" title="Instagram">📷</a>
                            <a href="#" title="Facebook">f</a>
                            <a href="#" title="Twitter">𝕏</a>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Apply Filters
        function applyFilters() {
            const category = document.getElementById('category-filter').value;
            const sort = document.getElementById('sort-filter').value;

            let filtered = artworks.filter(a => !category || a.category === category);

            switch(sort) {
                case 'price-low':
                    filtered.sort((a, b) => a.price - b.price);
                    break;
                case 'price-high':
                    filtered.sort((a, b) => b.price - a.price);
                    break;
                case 'popular':
                    filtered.sort((a, b) => b.popularity - a.popularity);
                    break;
                default:
                    filtered.reverse();
            }

            renderArtworks(filtered);
        }

        // Art Modal
        function openArtModal(artwork) {
            currentArtwork = artwork;
            document.getElementById('detail-image').src = artwork.image;
            document.getElementById('detail-title').textContent = artwork.title;
            document.getElementById('detail-artist').textContent = artwork.artist;
            document.getElementById('detail-year').textContent = artwork.year;
            document.getElementById('detail-medium').textContent = artwork.medium;
            document.getElementById('detail-dimensions').textContent = artwork.dimensions;
            document.getElementById('detail-price').textContent = `$${artwork.price.toLocaleString()}`;
            document.getElementById('detail-description').textContent = artwork.description;
            document.getElementById('add-to-favorites-btn').classList.toggle('active', favorites.includes(artwork.id));
            
            document.getElementById('art-modal').classList.add('active');
        }

        // Add to Cart
        function addToCart() {
            if (!currentArtwork) return;
            
            const option = document.querySelector('input[name="art-option"]:checked').value;
            addArtworkToCart(currentArtwork, option);
            document.getElementById('art-modal').classList.remove('active');
        }

        function addArtworkToCart(artwork, option = 'original') {
            const existingItem = cart.find(item => item.id === artwork.id && item.option === option);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...artwork,
                    quantity: 1,
                    option: option,
                    cartId: Date.now()
                });
            }

            saveToLocalStorage();
            updateBadges();
            showNotification(`${artwork.title} added to cart!`);
        }

        // Open Cart Modal
        function openCartModal() {
            const modal = document.getElementById('cart-modal');
            const itemsContainer = document.getElementById('cart-items');

            if (cart.length === 0) {
                itemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty. Explore our gallery!</div>';
            } else {
                itemsContainer.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.title}</div>
                            <div class="cart-item-details">Artist: ${item.artist}</div>
                            <div class="cart-item-details">Type: ${capitalizeOption(item.option)}</div>
                            <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
                        </div>
                        <button class="cart-item-remove" data-cart-id="${item.cartId}">✕</button>
                    </div>
                `).join('');

                document.querySelectorAll('.cart-item-remove').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const cartId = parseInt(e.target.dataset.cartId);
                        cart = cart.filter(item => item.cartId !== cartId);
                        saveToLocalStorage();
                        updateBadges();
                        openCartModal();
                    });
                });
            }

            updateCartSummary();
            modal.classList.add('active');
        }

        // Update Cart Summary
        function updateCartSummary() {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 25) : 0;
            const total = subtotal + shipping;

            document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString()}`;
            document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toLocaleString()}`;
            document.getElementById('total').textContent = `$${total.toLocaleString()}`;
        }

        // Favorites
        function toggleFavoriteArtwork(artworkId, btn) {
            if (favorites.includes(artworkId)) {
                favorites = favorites.filter(id => id !== artworkId);
                btn?.classList.remove('active');
            } else {
                favorites.push(artworkId);
                btn?.classList.add('active');
            }
            saveToLocalStorage();
            updateBadges();
        }

        function toggleFavorite() {
            if (!currentArtwork) return;
            toggleFavoriteArtwork(currentArtwork.id, document.getElementById('add-to-favorites-btn'));
        }

        // Update Badges
        function updateBadges() {
            const badgeElements = document.querySelectorAll('.badge');
            if (badgeElements[0]) badgeElements[0].textContent = favorites.length;
            if (badgeElements[1]) badgeElements[1].textContent = cart.length;
        }

        // Local Storage
        function saveToLocalStorage() {
            localStorage.setItem('art-cart', JSON.stringify(cart));
            localStorage.setItem('art-favorites', JSON.stringify(favorites));
        }

        function loadFromLocalStorage() {
            const savedCart = localStorage.getItem('art-cart');
            const savedFavorites = localStorage.getItem('art-favorites');

            if (savedCart) cart = JSON.parse(savedCart);
            if (savedFavorites) favorites = JSON.parse(savedFavorites);
        }

        // Utilities
        function capitalizeOption(option) {
            return option.charAt(0).toUpperCase() + option.slice(1);
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #c7306b, #d4427d);
                color: white;
                padding: 16px 24px;
                border-radius: 8px;
                z-index: 2000;
                animation: slideInRight 0.3s;
                box-shadow: 0 4px 15px rgba(199, 48, 107, 0.3);
            `;
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => notification.remove(), 3000);
        }
