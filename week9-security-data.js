const makeQuestion = (q, a, correct, explain) => ({ q, a, correct, explain });

window.studyGuide = {
  sections: [
    {
      id: "security-overview",
      nav: "מבוא",
      icon: "🛡",
      title: "מבוא לאבטחה ב-AWS ויעדי השיעור",
      intro:
        "השיעור מציב את האבטחה כאחד העקרונות המרכזיים של AWS: שמירה על סודיות, שלמות וזמינות של נתונים, יישומים ותשתיות בענן. מכאן עוברים לשכבות ההגנה המעשיות: רשת, משאב, אפליקציה, זמינות והצפנה.",
      blocks: [
        {
          type: "lead",
          title: "מה המצגת רוצה שתבין לפני שנכנסים לשירותים",
          text:
            "אבטחה בענן אינה שירות יחיד. היא שילוב של בקרות גישה, סינון תעבורה, הגנה מפני עומסים והתקפות, הצפנה, ניהול מפתחות וניטור אירועים. בשפה של AWS, המטרה היא לאפשר ללקוח לבנות סביבה שמגנה על שלושת עקרונות ה־CIA: <strong>Confidentiality</strong> - סודיות, <strong>Integrity</strong> - שלמות, ו־<strong>Availability</strong> - זמינות.",
        },
        {
          type: "cards",
          title: "יעדי השיעור לפי המצגת",
          cards: [
            {
              accent: "blue",
              title: "NACL",
              text:
                "רשימות בקרת גישה ברמת ה־Subnet. הן בודקות תעבורה נכנסת ויוצאת לפי כללים, והן Stateless.",
            },
            {
              accent: "teal",
              title: "Security Groups",
              text:
                "חומת אש לוגית ברמת משאב, למשל EC2 או RDS. היא Stateful ומאפשרת רק תעבורה שהוגדרה במפורש.",
            },
            {
              accent: "purple",
              title: "NAT Gateway",
              text:
                "מאפשר למשאבים ב־Private Subnet לצאת לאינטרנט בלי לחשוף את כתובת ה־IP הפרטית שלהם.",
            },
            {
              accent: "red",
              title: "DDoS, Shield ו-WAF",
              text:
                "הגנה מפני הצפות, פגיעה בזמינות ותעבורה זדונית בשכבת האפליקציה.",
            },
            {
              accent: "orange",
              title: "KMS",
              text:
                "שירות ניהול מפתחות הצפנה: יצירה, שימוש, הרשאות, ביקורת, מחזור חיים ואינטגרציה עם שירותי AWS.",
            },
          ],
        },
        {
          type: "list",
          title: "חזרה חשובה מ-Networking",
          items: [
            "כל VPC הוא רשת מבודדת שאינה מתקשרת ישירות עם VPCs אחרים כברירת מחדל.",
            "בתוך VPC אפשר להגדיר Public Subnets ו-Private Subnets, ולשלוט בזרימת התעבורה ביניהם.",
            "Security Groups ו-NACLs משתלבים עם תכנון Subnets כדי להחליט מה נכנס, מה יוצא, ולאיזה משאב מגיעים.",
            "לתקשורת מבוקרת בין סביבות מבודדות ניתן להשתמש ב־VPC Peering, Transit Gateway, PrivateLink או VPN.",
            "השיעור מוסיף מעל זה שכבות הגנה מפני DoS/DDoS, הצפנה באמצעות KMS והגנה ברמת Web באמצעות WAF.",
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">מפת שכבות האבטחה בשיעור</h3>
            <div class="security-layer-stack">
              <div class="security-layer"><strong>Subnet</strong><span>NACL מסנן בגבול תת-הרשת, עוד לפני שהמנה מגיעה למשאב.</span></div>
              <div class="security-layer"><strong>Instance / Resource</strong><span>Security Group מסנן תעבורה אל המשאב עצמו, למשל EC2 או RDS.</span></div>
              <div class="security-layer"><strong>Web Layer</strong><span>WAF בודק בקשות HTTP/S ומגן מפני SQLi, XSS, בוטים ועוד.</span></div>
              <div class="security-layer"><strong>Availability</strong><span>Shield מסייע מול DDoS ושומר על זמינות השירותים.</span></div>
              <div class="security-layer"><strong>Data</strong><span>KMS מנהל מפתחות להצפנה במנוחה ובשירותים שונים של AWS.</span></div>
            </div>
          `,
        },
      ],
      quiz: [
        makeQuestion(
          "איזה עיקרון אבטחה מופיע במצגת כבסיס להגנה על נתונים, יישומים ותשתיות?",
          ["CIA - סודיות, שלמות וזמינות", "FIFO - תור לפי סדר כניסה", "NAT - תרגום כתובות בלבד", "HTTP - פרוטוקול Web בלבד"],
          0,
          "המצגת מדגישה את CIA: Confidentiality, Integrity, Availability.",
        ),
        makeQuestion(
          "איזה שירות בשיעור עוסק בניהול מפתחות הצפנה?",
          ["AWS WAF", "AWS KMS", "NACL", "NAT Gateway"],
          1,
          "KMS הוא Key Management Service, שירות מנוהל ליצירה, ניהול ושימוש במפתחות קריפטוגרפיים.",
        ),
        makeQuestion(
          "איזה זוג שירותים מתמקד בעיקר בסינון תעבורת רשת בתוך VPC?",
          ["CloudTrail ו-S3", "NACL ו-Security Groups", "KMS ו-RDS", "CloudFront ו-Route 53 בלבד"],
          1,
          "NACL פועל ברמת Subnet ו-Security Group פועל ברמת המשאב.",
        ),
        makeQuestion(
          "איזה שירות מוזכר כמנגנון שמאפשר תקשורת פרטית בין VPCs או סביבות מבודדות?",
          ["VPC Peering", "S3 Bucket", "KMS Key", "WAF Rule"],
          0,
          "בהקדמה מוזכרים VPC Peering, Transit Gateway, PrivateLink ו-VPN כאפשרויות לתקשורת מבוקרת.",
        ),
      ],
    },
    {
      id: "firewall-basics",
      nav: "Firewall",
      icon: "▧",
      title: "חומת אש: התזכורת שעליה נשען כל השיעור",
      intro:
        "לפני AWS, צריך להבין מהי חומת אש: רכיב שמחליט אילו מנות רשת רשאיות לעבור ואילו ייחסמו. כל שאר השירותים בשיעור הם גרסאות ממוקדות של אותו רעיון בשכבות שונות.",
      blocks: [
        {
          type: "lead",
          title: "הגדרה מדויקת",
          text:
            "חומת אש היא רכיב אבטחה שמבקר ומסנן תעבורת רשת נכנסת ויוצאת לפי כללים מוגדרים מראש. היא משמשת כשער ביקורת בין אזורים בעלי רמות אמון שונות, לדוגמה בין רשת פנימית פרטית לבין האינטרנט.",
        },
        {
          type: "cards",
          title: "על אילו פרמטרים חוק Firewall יכול להתבסס",
          cards: [
            {
              accent: "blue",
              title: "כתובת IP מקור ויעד",
              text:
                "החוק יכול לבדוק מאיפה המנה מגיעה ולאן היא מנסה להגיע.",
            },
            {
              accent: "teal",
              title: "Ports",
              text:
                "לדוגמה 80 ל־HTTP, 443 ל־HTTPS או 22 ל־SSH. פורט לא פתוח פירושו שאין כניסה לשירות הזה.",
            },
            {
              accent: "orange",
              title: "Protocol",
              text:
                "החוק יכול להתייחס ל־TCP, UDP, ICMP או לפרוטוקולים אחרים.",
            },
            {
              accent: "red",
              title: "Direction",
              text:
                "Inbound מתייחס לתעבורה נכנסת; Outbound מתייחס לתעבורה יוצאת.",
            },
          ],
        },
        {
          type: "diagram-flow",
          title: "עקרון הפעולה של חומת אש",
          cols: 4,
          steps: [
            { title: "1. מנה מגיעה", text: "תעבורה נכנסת או יוצאת פוגשת את רכיב הסינון.", color: "var(--blue)" },
            { title: "2. בדיקת כללים", text: "בודקים IP, פורט, פרוטוקול וכיוון תנועה.", color: "var(--teal)" },
            { title: "3. התאמה לכלל", text: "אם יש Allow מתאים, התעבורה מורשית.", color: "var(--green)" },
            { title: "4. חסימה", text: "אם יש Deny/Reject או אין כלל מתאים, התעבורה נחסמת.", color: "var(--red)" },
          ],
        },
        {
          type: "callout",
          color: "blue",
          title: "הקשר לשירותי AWS",
          text:
            "NACL, Security Group ו-WAF הם כולם מנגנוני Firewall, אבל כל אחד מהם פועל ברמת שכבה אחרת: Subnet, משאב, או בקשת HTTP/S.",
        },
      ],
      quiz: [
        makeQuestion(
          "מה תפקידה המרכזי של חומת אש?",
          ["לסנן תעבורה לפי כללים", "לאחסן קבצים", "להצפין דיסקים בלבד", "להחליף את ה-DNS"],
          0,
          "חומת אש בודקת תעבורה נכנסת ויוצאת ומחליטה אם לאפשר או לחסום.",
        ),
        makeQuestion(
          "מה פירוש Inbound בהקשר של Firewall?",
          ["תעבורה נכנסת", "תעבורה יוצאת", "הצפנה במנוחה", "שם של מפתח KMS"],
          0,
          "Inbound הוא כיוון תנועה שנכנס אל הרשת או המשאב.",
        ),
        makeQuestion(
          "איזה פרמטר אינו דוגמה רגילה לכלל Firewall בשקופית?",
          ["כתובת IP", "פורט", "פרוטוקול", "צבע הרקע של האתר"],
          3,
          "כללי Firewall מתבססים על מאפייני רשת, לא על עיצוב האתר.",
        ),
        makeQuestion(
          "מה קורה כאשר התעבורה מתאימה לכלל חסום?",
          ["היא נשלחת ל-KMS", "היא נחסמת", "היא הופכת ל-Public Subnet", "היא מקבלת כתובת DNS"],
          1,
          "כלל Deny או Reject גורם לחסימת התעבורה.",
        ),
      ],
    },
    {
      id: "nacl",
      nav: "NACL",
      icon: "↕",
      title: "Network Access Control Lists - חומת אש ברמת Subnet",
      intro:
        "NACL היא שכבת הגנה רחבה ברמת תת-הרשת. היא מתאימה לבקרות רוחביות: מה נכנס אל ה-Subnet ומה יוצא ממנו. היא Stateless, ולכן חייבים לחשוב בנפרד על כיוון הכניסה ועל כיוון היציאה.",
      blocks: [
        {
          type: "lead",
          title: "מהי NACL",
          text:
            "Network ACL היא חומת אש וירטואלית שפועלת ברמת ה־Subnet בתוך VPC. היא שולטת בתעבורה נכנסת ויוצאת ומאפשרת או חוסמת מנות לפי כללים מוגדרים מראש. דימוי המצגת הוא ביקורת גבולות בשדה תעופה: הנוסעים הם packets, המדינה היא ה־Subnet, וקצין ביקורת הדרכונים הוא ה־NACL.",
        },
        {
          type: "cards",
          title: "מאפיינים שחייבים לזכור",
          cards: [
            {
              accent: "blue",
              title: "Subnet level",
              text:
                "ה-NACL מחובר לתת-רשת, ולכן משפיע על כל המשאבים שבתוכה.",
            },
            {
              accent: "red",
              title: "Allow וגם Deny",
              text:
                "בניגוד ל-Security Group, ב-NACL אפשר להגדיר גם כללי Allow וגם כללי Deny.",
            },
            {
              accent: "orange",
              title: "Rule order",
              text:
                "הכללים מיושמים לפי סדר. הכלל הראשון שמתאים לתעבורה הוא זה שקובע.",
            },
            {
              accent: "purple",
              title: "Stateless",
              text:
                "כל מנה נבדקת בפני עצמה. תגובה לבקשה קודמת לא מקבלת אישור אוטומטי.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">Default NACL מול Custom NACL</h3>
            <div class="acl-console">
              <div class="console-card">
                <h4>Default Network ACL</h4>
                <table>
                  <thead><tr><th>כיוון</th><th>Rule</th><th>Type</th><th>Source/Destination</th><th>Action</th></tr></thead>
                  <tbody>
                    <tr><td>Inbound</td><td>100</td><td>All traffic</td><td>0.0.0.0/0</td><td><span class="rule-pill allow">Allow</span></td></tr>
                    <tr><td>Inbound</td><td>*</td><td>All traffic</td><td>0.0.0.0/0</td><td><span class="rule-pill deny">Deny</span></td></tr>
                    <tr><td>Outbound</td><td>100</td><td>All traffic</td><td>0.0.0.0/0</td><td><span class="rule-pill allow">Allow</span></td></tr>
                    <tr><td>Outbound</td><td>*</td><td>All traffic</td><td>0.0.0.0/0</td><td><span class="rule-pill deny">Deny</span></td></tr>
                  </tbody>
                </table>
              </div>
              <div class="console-card">
                <h4>Custom Network ACL חדש</h4>
                <table>
                  <thead><tr><th>כיוון</th><th>Rule</th><th>Type</th><th>Source/Destination</th><th>Action</th></tr></thead>
                  <tbody>
                    <tr><td>Inbound</td><td>*</td><td>All traffic</td><td>0.0.0.0/0</td><td><span class="rule-pill deny">Deny</span></td></tr>
                    <tr><td>Outbound</td><td>*</td><td>All traffic</td><td>0.0.0.0/0</td><td><span class="rule-pill deny">Deny</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          `,
        },
        {
          type: "list",
          title: "הנקודות שהופיעו בשקופיות הקונסול",
          items: [
            "בכל חשבון AWS קיימת Network ACL כברירת מחדל.",
            "Default NACL מאפשרת כברירת מחדל את כל התעבורה הנכנסת והיוצאת.",
            "Custom NACL חדש חוסם את כל התעבורה הנכנסת והיוצאת עד שמוסיפים כללים מפורשים.",
            "בכל ACL יש כלל סירוב מפורש בסוף הרשימה. אם אף כלל לא התאים, המנה נדחית.",
            "המצגת מציגה דוגמה בשם yoav-subnet-test שבה Inbound ו-Outbound נדחים ל-0.0.0.0/0 עד להוספת כללים.",
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">למה Stateless משנה את צורת החשיבה</h3>
            <div class="traffic-flow">
              <div class="traffic-node"><strong>בקשה יוצאת</strong><em>שרת ב-Subnet שולח בקשה החוצה.</em></div>
              <div class="traffic-node"><strong>בדיקת Outbound</strong><em>NACL בודקת אם מותר לצאת.</em></div>
              <div class="traffic-node"><strong>תגובה חוזרת</strong><em>השרת המרוחק מחזיר packet.</em></div>
              <div class="traffic-node"><strong>בדיקת Inbound חדשה</strong><em>NACL אינה זוכרת את הבקשה המקורית.</em></div>
              <div class="traffic-node"><strong>צריך כלל דו-כיווני</strong><em>לכן מגדירים גם יציאה וגם כניסה מתאימה.</em></div>
            </div>
          `,
        },
      ],
      quiz: [
        makeQuestion(
          "באיזו רמה פועלת NACL?",
          ["ברמת Subnet", "ברמת קובץ S3", "ברמת משתמש IAM בלבד", "ברמת דפדפן בלבד"],
          0,
          "NACL היא חומת אש ברמת תת-הרשת בתוך VPC.",
        ),
        makeQuestion(
          "מה נכון לגבי Custom NACL חדש?",
          ["מאפשר הכל כברירת מחדל", "חוסם הכל עד להגדרת כללים", "מחליף את KMS", "פועל רק על HTTP"],
          1,
          "Custom NACL מתחיל ממצב שבו התעבורה חסומה עד שמוסיפים Allow מתאים.",
        ),
        makeQuestion(
          "מה המשמעות של Stateless ב-NACL?",
          [
            "ה-NACL לא שומרת הקשר בין בקשה לתגובה",
            "ה-NACL זוכרת תמיד כל חיבור",
            "ה-NACL עובדת רק עם קבצים",
            "ה-NACL מאפשרת רק HTTPS",
          ],
          0,
          "כל packet נבדק בנפרד, גם אם הוא תגובה לבקשה קודמת.",
        ),
        makeQuestion(
          "איזה סוג כללים ניתן להגדיר ב-NACL?",
          ["Allow וגם Deny", "Allow בלבד", "Deny בלבד", "רק כללים של IAM"],
          0,
          "NACL תומכת גם ב-Allow וגם ב-Deny, וזה אחד ההבדלים המרכזיים מול Security Groups.",
        ),
        makeQuestion(
          "מה קורה ב-NACL אם אף כלל לא מתאים למנה?",
          ["הכלל הסופי דוחה אותה", "היא מאושרת אוטומטית", "היא נשלחת ל-WAF", "היא הופכת ל-Key"],
          0,
          "כל ACL כולל כלל Deny סופי שמבטיח שמנה לא תעבור בלי התאמה לכלל מפורש.",
        ),
      ],
    },
    {
      id: "security-groups",
      nav: "SG",
      icon: "▣",
      title: "Security Groups - חומת אש ברמת משאב",
      intro:
        "אחרי שמנה עברה את ה-NACL ונכנסה ל-Subnet, עדיין צריך לבדוק האם היא רשאית להגיע למשאב עצמו. כאן נכנס Security Group: חומת אש לוגית, Stateful, שמוחלת על משאבים כמו EC2 ו-RDS.",
      blocks: [
        {
          type: "lead",
          title: "מהו Security Group",
          text:
            "Security Group הוא חומת אש וירטואלית שמגדירה איזו תעבורה מותרת למופע שרת או למשאב AWS. בשונה מ-NACL, אין בו כללי Deny מפורשים: אתה מגדיר מה מותר, וכל מה שלא הותר פשוט לא עובר.",
        },
        {
          type: "cards",
          title: "איפה משתמשים ב-Security Groups",
          cards: [
            {
              accent: "blue",
              title: "EC2",
              text:
                "הדוגמה המרכזית במצגת: מופע EC2 מקבל או דוחה תעבורה לפי ה-SG שמחובר אליו.",
            },
            {
              accent: "teal",
              title: "RDS",
              text:
                "אפשר להגן על בסיסי נתונים ולפתוח גישה רק מאפליקציה או SG מסוים.",
            },
            {
              accent: "orange",
              title: "EBS",
              text:
                "המצגת מזכירה גם EBS כדוגמה למשאב שמופיע בהקשר הרשאות/הגנה.",
            },
            {
              accent: "purple",
              title: "אותו SG לכמה משאבים",
              text:
                "ניתן לשייך כמה מופעי EC2 לאותה קבוצת אבטחה או להפריד לפי תפקיד ורמת הגנה.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">ברירות מחדל ודוגמאות מהשקופיות</h3>
            <div class="sg-default-grid">
              <div class="sg-default-card"><strong>Inbound ב-SG ברירת מחדל</strong><span>מותרת תעבורה רק בין רכיבי הקבוצה עצמה, כלומר SG שמפנה אל עצמו, לא מכל העולם.</span></div>
              <div class="sg-default-card"><strong>Outbound ב-SG ברירת מחדל</strong><span>כל התעבורה היוצאת מותרת לכל העולם.</span></div>
              <div class="sg-default-card"><strong>SG מותאם אישית - Inbound</strong><span>כניסה אסורה עד שמוסיפים כלל מפורש, לדוגמה לפתיחת SSH או HTTPS.</span></div>
              <div class="sg-default-card"><strong>SG מותאם אישית - Outbound</strong><span>בדרך כלל יציאה מותרת לכל העולם, אלא אם משנים את הכללים.</span></div>
            </div>
          `,
        },
        {
          type: "list",
          title: "דימוי המצגת: שומר בבניין דירות",
          items: [
            "האורחים הם packets.",
            "השומר הוא Security Group.",
            "אם אורח מופיע ברשימת המותרים, הוא נכנס.",
            "כאשר האורח יוצא וחוזרת תגובה שקשורה לחיבור שכבר אושר, השומר זוכר את ההקשר.",
            "זו הסיבה ש-Security Group מוגדר Stateful.",
          ],
        },
        {
          type: "callout",
          color: "orange",
          title: "משפט מפתח למבחן",
          text:
            "Security Group לא אומר 'הכל מותר ואז נחסום'. הוא אומר: רק מה שמוגדר כמותר יכול לעבור. אם אין כלל שמאפשר HTTPS בפורט 443, כניסה בפרוטוקול הזה לא תתאפשר.",
        },
      ],
      quiz: [
        makeQuestion(
          "באיזו רמה פועל Security Group?",
          ["ברמת משאב או Instance", "ברמת כל האינטרנט", "ברמת חשבון Billing", "ברמת קובץ HTML"],
          0,
          "Security Group מוחל על משאבים כמו EC2, RDS ועוד.",
        ),
        makeQuestion(
          "מה נכון לגבי Security Groups וכללי Deny?",
          ["יש Allow וגם Deny", "יש Deny בלבד", "אין Deny מפורש, מגדירים מה מותר", "Deny קיים רק ל-KMS"],
          2,
          "ב-SG מגדירים תעבורה מותרת בלבד. מה שלא מוגדר כמותר לא עובר.",
        ),
        makeQuestion(
          "מה המשמעות של Stateful ב-Security Group?",
          ["הוא זוכר חיבור שאושר ומאפשר את התגובה", "הוא שוכח כל בקשה", "הוא חוסם תמיד Outbound", "הוא עובד רק מול WAF"],
          0,
          "אם מופע EC2 יזם בקשה החוצה, התגובה החוזרת תותר בזכות שמירת המצב.",
        ),
        makeQuestion(
          "מה קורה אם לא הוגדר כלל שמאפשר HTTPS בפורט 443 אל המשאב?",
          ["הכניסה ב-HTTPS לא תותר", "הכניסה תותר כי 443 תמיד פתוח", "הכל יעבור דרך KMS", "הכל ינותב ל-Route 53"],
          0,
          "ב-SG רק תעבורה שהוגדרה במפורש כמותרת יכולה להיכנס.",
        ),
        makeQuestion(
          "מה מתארת הדוגמה של SG שמפנה אל עצמו?",
          ["תעבורה בין רכיבי אותה קבוצת אבטחה", "גישה מכל העולם", "הצפנה אוטומטית", "מחיקת Route Table"],
          0,
          "בשקופיות ברירת המחדל, Inbound מותר רק לתקשורת בין רכיבי הקבוצה עצמה.",
        ),
      ],
    },
    {
      id: "stateful-stateless",
      nav: "השוואה",
      icon: "⇄",
      title: "Stateful מול Stateless: ההבדל שחייבים לדעת",
      intro:
        "המצגת מתעכבת על ההבדל הזה כי הוא חוזר במבחנים: NACL היא Stateless, Security Group הוא Stateful. מכאן נגזר איך מגדירים חוקים לכניסה וליציאה.",
      blocks: [
        {
          type: "html",
          html: `
            <h3 class="block-title">סיכום תעבורה נכנסת/יוצאת לפי המצגת</h3>
            <div class="state-comparison">
              <table>
                <thead>
                  <tr>
                    <th>רכיב</th>
                    <th>State</th>
                    <th>ברירת מחדל - Inbound</th>
                    <th>ברירת מחדל - Outbound</th>
                    <th>Custom - Inbound</th>
                    <th>Custom - Outbound</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>NACL</strong></td>
                    <td>Stateless</td>
                    <td><span class="ok">מותר</span></td>
                    <td><span class="ok">מותר</span></td>
                    <td><span class="no">אסור</span></td>
                    <td><span class="no">אסור</span></td>
                  </tr>
                  <tr>
                    <td><strong>Security Group</strong></td>
                    <td>Stateful</td>
                    <td><span class="ok">מותר רק בתוך ה-SG עצמו</span></td>
                    <td><span class="ok">מותר</span></td>
                    <td><span class="no">אסור עד להוספת כלל</span></td>
                    <td><span class="ok">מותר</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">המסלול של Packet שנכנס לשרת</h3>
            <div class="traffic-flow">
              <div class="traffic-node"><strong>אינטרנט / רשת אחרת</strong><em>הבקשה מגיעה מבחוץ.</em></div>
              <div class="traffic-node"><strong>NACL Inbound</strong><em>בדיקה ראשונה בגבול ה-Subnet.</em></div>
              <div class="traffic-node"><strong>Subnet</strong><em>אם ה-NACL אישר, המנה נכנסת לתת-הרשת.</em></div>
              <div class="traffic-node"><strong>Security Group</strong><em>בדיקה שנייה ברמת המשאב.</em></div>
              <div class="traffic-node"><strong>EC2 / RDS</strong><em>רק אם שני השלבים אישרו, המשאב מקבל את התעבורה.</em></div>
            </div>
          `,
        },
        {
          type: "cards",
          title: "שתי שאלות בדיקת ידע מהמצגת, כידע פתוח",
          cards: [
            {
              accent: "blue",
              title: "רשת משנה פרטית",
              text:
                "מתאימה לבידוד מסדי נתונים המכילים מידע אישי של לקוחות.",
            },
            {
              accent: "green",
              title: "רשת משנה ציבורית",
              text:
                "מתאימה לתמיכה באתר שפונה ללקוחות.",
            },
            {
              accent: "purple",
              title: "Virtual Private Gateway",
              text:
                "משמש ליצירת חיבור VPN בין ה-VPC לבין הרשת הפנימית הארגונית.",
            },
            {
              accent: "orange",
              title: "AWS Direct Connect",
              text:
                "משמש ליצירת חיבור ייעודי בין מרכז הנתונים המקומי לבין ה-VPC.",
            },
          ],
        },
        {
          type: "callout",
          color: "red",
          title: "שאלת המבחן לדוגמה מהמצגת",
          text:
            "המשפט הנכון על Default Network ACL הוא: היא Stateless ומאפשרת את כל התעבורה הנכנסת והיוצאת כברירת מחדל. בעמוד הזה המשפט מופיע גם כשאלת תרגול, אבל הפתרון שלה לא מוצג עד לחיצה.",
        },
      ],
      quiz: [
        makeQuestion(
          "איזה משפט מתאר נכון את ה-Network ACL המוגדר כברירת מחדל ב-AWS?",
          [
            "היא ללא מצב ומונעת כל תעבורה נכנסת ויוצאת",
            "היא עם מצב ומאפשרת את כל התעבורה הנכנסת והיוצאת",
            "היא ללא מצב ומאפשרת את כל התעבורה הנכנסת והיוצאת",
            "היא עם מצב ומונעת כל תעבורה נכנסת ויוצאת",
          ],
          2,
          "זו שאלת הדוגמה מהמצגת. Default NACL היא Stateless, וברירת המחדל שלה מאפשרת Inbound ו-Outbound.",
        ),
        makeQuestion(
          "מה מתאים לרשת משנה פרטית לפי בדיקת הידע?",
          [
            "תמיכה באתר הפונה ללקוחות",
            "בידוד מסדי נתונים המכילים מידע אישי של לקוחות",
            "יצירת חיבור ייעודי בין Data Center ל-VPC",
            "יצירת DNS ציבורי",
          ],
          1,
          "Private Subnet מתאים למשאבים שלא צריכים חשיפה ישירה, למשל מסדי נתונים רגישים.",
        ),
        makeQuestion(
          "מה מתאים ל-AWS Direct Connect לפי בדיקת הידע?",
          [
            "יצירת חיבור ייעודי בין מרכז הנתונים המקומי ל-VPC",
            "בידוד מסדי נתונים",
            "תמיכה באתר ציבורי",
            "בדיקת בקשות HTTP/S",
          ],
          0,
          "Direct Connect הוא חיבור ייעודי ולא VPN רגיל על גבי האינטרנט.",
        ),
        makeQuestion(
          "מה ההבדל הקצר ביותר בין NACL ל-SG?",
          [
            "NACL Stateful ו-SG Stateless",
            "NACL ברמת Subnet ו-Stateless, SG ברמת משאב ו-Stateful",
            "שניהם פועלים רק ברמת HTTP",
            "שניהם משמשים רק להצפנה",
          ],
          1,
          "זה ההבדל המרכזי שמחבר את רוב השקופיות בנושא.",
        ),
      ],
    },
    {
      id: "ddos",
      nav: "DDoS",
      icon: "⚠",
      title: "התקפות מניעת שירות - DoS ו-DDoS",
      intro:
        "DDoS היא מתקפה שמטרתה לשבש או לשתק את פעילות התשתית והאפליקציה באמצעות הצפה של בקשות מעבר ליכולת ההכלה והתגובה של המערכת.",
      blocks: [
        {
          type: "lead",
          title: "מה קורה במתקפת DDoS",
          text:
            "במצב רגיל, האפליקציה מקבלת בקשות ממשתמשים לגיטימיים ומחזירה תשובות. במתקפת DDoS, התוקף מפעיל מאות או אלפי מקורות - לעיתים בוטים או מחשבים נגועים - כדי להציף את השירות בבקשות מזויפות. המערכת כורעת תחת העומס, והמשתמשים האמיתיים אינם מקבלים שירות.",
        },
        {
          type: "cards",
          title: "DoS מול DDoS",
          cards: [
            {
              accent: "orange",
              title: "DoS",
              text:
                "מקור תקיפה יחיד מנסה לגרום לשלילת שירות. לרוב קשה לייצר כך מתקפה חזקה מספיק נגד תשתית מודרנית.",
            },
            {
              accent: "red",
              title: "DDoS",
              text:
                "תקיפה מבוזרת שמנצלת מקורות רבים ברחבי האינטרנט כדי להציף את השירות.",
            },
            {
              accent: "purple",
              title: "Botnet",
              text:
                "המצגת מתארת 'צבא' של מחשבים נגועים שפועלים בלי ידיעת בעליהם.",
            },
            {
              accent: "blue",
              title: "Denial of Service",
              text:
                "שלילת שירות פירושה מניעת גישה ממשתמשים לגיטימיים.",
            },
          ],
        },
        {
          type: "table",
          title: "סוגי התקפות שמופיעים במצגת",
          headers: ["סוג התקפה", "מה היא מנסה לצרוך", "דוגמאות"],
          rows: [
            ["Volumetric attacks", "רוחב פס וקיבולת תעבורה", "UDP Flood, ICMP traffic"],
            ["Protocol attacks", "חולשות ומשאבים בפרוטוקולי רשת", "SYN Flood, ניצול TCP/IP/HTTP"],
            ["Application layer attacks", "משאבי CPU/Memory של שכבת האפליקציה", "HTTP GET Flood, שאילתות SQL כבדות"],
          ],
        },
        {
          type: "callout",
          color: "orange",
          title: "הערת מבחן מהמצגת",
          text:
            "השקופית מציינת שסוגי ההתקפות אינם למבחן לפרטי פרטים, אבל חשוב להכיר את העיקרון ואת הדוגמאות המרכזיות כמו UDP Flood.",
        },
      ],
      quiz: [
        makeQuestion(
          "מהי מטרת מתקפת DDoS?",
          ["לשבש זמינות שירות באמצעות הצפה", "ליצור מפתח הצפנה", "להגדיר DNS", "לפתוח פורט 443"],
          0,
          "DDoS נועדה לגרום לשלילת שירות ולפגוע בזמינות.",
        ),
        makeQuestion(
          "מה ההבדל המרכזי בין DoS ל-DDoS?",
          ["DDoS מבוזרת ממקורות רבים", "DoS תמיד משתמשת ב-KMS", "DDoS היא הצפנה", "DoS פועל רק על S3"],
          0,
          "DDoS משתמשת בהרבה מקורות תקיפה, לעיתים Botnet.",
        ),
        makeQuestion(
          "איזו התקפה מכוונת בעיקר לצריכת רוחב פס?",
          ["Volumetric attack", "Key rotation", "NAT translation", "IAM policy"],
          0,
          "Volumetric attacks מציפות בכמות גדולה של נתונים.",
        ),
        makeQuestion(
          "איזו דוגמה מתאימה להתקפת שכבת אפליקציה?",
          ["HTTP Flood", "יצירת VPC", "החלפת מפתח KMS", "Private Route Table"],
          0,
          "Application layer attacks שולחות הרבה בקשות שדורשות עיבוד בצד האפליקציה.",
        ),
      ],
    },
    {
      id: "shield",
      nav: "Shield",
      icon: "◆",
      title: "AWS Shield - הגנה מפני DDoS",
      intro:
        "AWS Shield הוא שירות הגנה מפני DDoS. הוא חלק ממערך ההגנה של AWS, ובמצגת הוא מוצג לצד WAF אך עם תפקיד שונה: Shield מתמקד בעיקר בזמינות ובהתקפות בשכבות רשת ותחבורה.",
      blocks: [
        {
          type: "cards",
          title: "שתי רמות השירות",
          cards: [
            {
              accent: "green",
              title: "Shield Standard",
              text:
                "כלול בכל חשבון AWS ללא עלות. מספק הגנה אוטומטית ברמת L3/L4 לשירותים נפוצים כמו CloudFront, Route 53, Elastic Load Balancing ו-Global Accelerator.",
            },
            {
              accent: "purple",
              title: "Shield Advanced",
              text:
                "שירות בתשלום, לפי המצגת בעלות קבועה של 3000 דולר לחודש. כולל יכולות מתקדמות, DRT, אינטגרציה עם WAF ו-cost protection.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">השוואת Shield Standard מול Shield Advanced</h3>
            <div class="shield-tier-grid">
              <table>
                <thead><tr><th>יכולת</th><th>Shield Standard</th><th>Shield Advanced</th></tr></thead>
                <tbody>
                  <tr><td>עלות</td><td>כלול ללא עלות</td><td>שירות פרימיום בתשלום</td></tr>
                  <tr><td>שכבות הגנה</td><td>L3/L4 - רשת ותחבורה</td><td>L3/L4 עם יכולות עמוקות יותר, ובשילוב עם WAF גם L7</td></tr>
                  <tr><td>Network flow monitoring</td><td><span class="ok">קיים</span></td><td><span class="ok">קיים</span></td></tr>
                  <tr><td>Automated layer 7 traffic monitoring</td><td><span class="no">לא</span></td><td><span class="ok">כן</span></td></tr>
                  <tr><td>Customized detection and mitigation</td><td><span class="no">לא</span></td><td><span class="ok">כן</span></td></tr>
                  <tr><td>Detection by resource health</td><td><span class="no">לא</span></td><td><span class="ok">כן</span></td></tr>
                  <tr><td>DRT</td><td><span class="no">לא</span></td><td><span class="ok">גישה לצוות תגובת DDoS</span></td></tr>
                  <tr><td>Cost protection</td><td><span class="no">לא</span></td><td><span class="ok">החזר/הגנה מעלויות חריגות במתקפה</span></td></tr>
                </tbody>
              </table>
            </div>
          `,
        },
        {
          type: "callout",
          color: "red",
          title: "מה Shield לא עושה לבד",
          text:
            "המצגת מדגישה ש-Shield אינו מבצע סינון תוכן ברמת HTTP/HTTPS אלא אם משלבים אותו עם WAF. כלומר Shield מטפל בעיקר בהגנה מפני DDoS, ו-WAF בודק את תוכן בקשות ה-Web.",
        },
      ],
      quiz: [
        makeQuestion(
          "מהי המטרה העיקרית של AWS Shield?",
          ["הגנה מפני DDoS", "ניהול מפתחות הצפנה", "תרגום כתובות NAT", "יצירת Subnet"],
          0,
          "Shield הוא שירות ייעודי להגנה מפני DDoS.",
        ),
        makeQuestion(
          "איזו רמת Shield כלולה ללא עלות בכל חשבון AWS?",
          ["Shield Standard", "Shield Advanced", "KMS Standard", "WAF Classic"],
          0,
          "Shield Standard כלול ללא עלות ומופעל אוטומטית על שירותים נפוצים.",
        ),
        makeQuestion(
          "איזו יכולת שייכת ל-Shield Advanced לפי המצגת?",
          ["DRT ו-cost protection", "מחיקת כל NACL", "הצפנת Data Key", "פתיחת SSH לכל העולם"],
          0,
          "Shield Advanced כולל גישה לצוות DRT והגנה מעלויות חריגות במתקפה.",
        ),
        makeQuestion(
          "מה נכון לגבי Shield וסינון HTTP/HTTPS?",
          ["Shield לא מסנן תוכן HTTP/HTTPS לבד; לכך משלבים WAF", "Shield מחליף כל Web ACL", "Shield הוא Route Table", "Shield עובד רק על EBS"],
          0,
          "לסינון תוכן ברמת אפליקציה משתמשים ב-WAF.",
        ),
      ],
    },
    {
      id: "waf",
      nav: "WAF",
      icon: "▦",
      title: "AWS WAF - Web Application Firewall",
      intro:
        "AWS WAF הוא חומת אש ליישומי Web. במקום לבדוק רק IP ופורט, הוא מבין בקשות HTTP/S ויכול לסנן לפי דפוס URL, headers, גוף הבקשה, כתובת IP ועוד.",
      blocks: [
        {
          type: "lead",
          title: "מהו AWS WAF",
          text:
            "AWS WAF מנטר, מסנן ומגן על בקשות HTTP/S שמגיעות לאפליקציות בענן. הוא מאפשר להגדיר כללים לחסימה, אישור או ניטור של בקשות, ומשתלב עם CloudFront, Application Load Balancer, API Gateway, AppSync GraphQL API ו-Cognito User Pool.",
        },
        {
          type: "cards",
          title: "מה WAF יודע לעצור",
          cards: [
            {
              accent: "red",
              title: "SQL Injection",
              text:
                "ניסיון להכניס פקודות זדוניות לשדות קלט כדי לגנוב, לשנות או למחוק נתונים.",
            },
            {
              accent: "orange",
              title: "XSS",
              text:
                "Cross-Site Scripting: ניסיון להכניס קוד שירוץ אצל משתמשים אחרים.",
            },
            {
              accent: "purple",
              title: "Rate Limiting",
              text:
                "הגבלת קצב בקשות כדי לעצור הצפה או התנהגות חריגה.",
            },
            {
              accent: "blue",
              title: "IP Blocking",
              text:
                "חסימת בקשות מכתובות IP שמופיעות ברשימה מוגדרת ב-Web ACL.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">איך Web ACL עובד</h3>
            <div class="waf-architecture">
              <div class="arch-node" data-kind="control"><strong>1. בקשת Web</strong><span>לקוח שולח HTTP/S אל CloudFront, ALB או API Gateway.</span></div>
              <div class="arch-node" data-kind="control"><strong>2. Web ACL</strong><span>הבקשה נבדקת מול חוקים לפי סדר עדיפות.</span></div>
              <div class="arch-node" data-kind="allow"><strong>3. Allow / Count</strong><span>בקשה תקינה יכולה להמשיך, או להיספר לצורכי ניטור.</span></div>
              <div class="arch-node" data-kind="block"><strong>4. Block</strong><span>בקשה זדונית נחסמת לפני שהיא פוגעת במשאבים.</span></div>
            </div>
          `,
        },
        {
          type: "table",
          title: "רכיבים שעליהם WAF יכול להגן לפי המצגת",
          headers: ["רכיב", "המשמעות"],
          rows: [
            ["Application Load Balancer", "סינון בקשות לפני שהן מגיעות ל-Targets מאחורי ה-ALB"],
            ["API Gateway", "הגנה על APIs מפני בקשות זדוניות או חריגות"],
            ["CloudFront", "סינון בקצה הרשת הגלובלית לפני האפליקציה"],
            ["AppSync GraphQL API", "הגנה על API מבוסס GraphQL"],
            ["Cognito User Pool", "הגנה על זרימות התחברות וזהות מול משתמשים"],
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">דגשים מתוך שקופיות ה-Console של WAF</h3>
            <ul class="match-list">
              <li><strong>Describe web ACL:</strong> מגדירים שם ל-Web ACL, שם מדד ל-CloudWatch ובוחרים את סוג המשאב שאליו מצמידים אותו.</li>
              <li><strong>Add rules and rule groups:</strong> מוסיפים Managed Rules או חוקים שהוגדרו ידנית.</li>
              <li><strong>Set rule priority:</strong> החוקים מסודרים לפי עדיפות. בשקופית מופיעים למשל AWSManagedRulesPHPRuleSet, AWSManagedRulesSQLiRuleSet, CommonRuleSet, AmazonIpReputationList ו-AnonymousIpList.</li>
              <li><strong>Configure metrics:</strong> מגדירים מדדים ותצפיות כדי לראות מה נחסם ומה נספר.</li>
              <li><strong>Review and create:</strong> בודקים את ה-Web ACL ויוצרים אותו.</li>
            </ul>
          `,
        },
        {
          type: "callout",
          color: "orange",
          title: "WAF, ALB ו-Global Accelerator",
          text:
            "השקופית מדגישה ש-WAF לא תומך ב-Network Load Balancer בשכבה 4. אם צריך IP קבוע יחד עם WAF, ניתן להשתמש ב-Global Accelerator עבור IP קבוע וב-WAF על ALB. בנוסף, Web ACL צריך להיות באותו AWS Region כמו ה-ALB שאליו הוא מוצמד.",
        },
        {
          type: "table",
          title: "Shield מול WAF - טבלת ההבדלים מהמצגת",
          headers: ["תכונה / שירות", "AWS Shield", "AWS WAF"],
          rows: [
            ["שכבות הגנה", "L3/L4 - רשת ותחבורה", "L7 - אפליקציה HTTP/S"],
            ["סוגי מתקפות", "DDoS, SYN Flood, UDP Flood", "SQLi, XSS, bots, brute-force"],
            ["כלול בחינם", "Shield Standard", "לא - בתשלום לפי תעבורה"],
            ["שילוב אפשרי", "עם WAF לשכבה 7", "עם Shield Advanced"],
            ["יכולת התאמה", "מוגבלת, למעט Advanced", "גמישה מאוד, חוקים בהתאמה אישית"],
          ],
        },
      ],
      quiz: [
        makeQuestion(
          "באיזו שכבה פועל WAF לפי המצגת?",
          ["L7 - שכבת אפליקציה", "L2 בלבד", "שכבת דיסק", "שכבת KMS"],
          0,
          "WAF בודק בקשות HTTP/S ולכן פועל ברמת שכבת האפליקציה.",
        ),
        makeQuestion(
          "איזה רכיב אינו נתמך ישירות על ידי WAF לפי השקופית?",
          ["Network Load Balancer", "Application Load Balancer", "CloudFront", "API Gateway"],
          0,
          "המצגת מציינת ש-WAF אינו תומך ב-Network Load Balancer בשכבה 4.",
        ),
        makeQuestion(
          "מהו Web ACL?",
          ["אוסף חוקים שמגדיר איך WAF מטפל בבקשות", "מפתח הצפנה", "דיסק EBS", "Subnet ציבורי"],
          0,
          "Web ACL מורכב מחוקים או rule groups ומוצמד למשאב נתמך.",
        ),
        makeQuestion(
          "איזו מתקפה WAF מתאים לזהות ולחסום?",
          ["SQL Injection", "החלפת מפתח אוטומטית", "VPN site-to-site", "Route Table local"],
          0,
          "WAF סורק בקשות HTTP/S ויכול לחסום SQLi, XSS, Rate Limiting ועוד.",
        ),
        makeQuestion(
          "מה נכון לגבי Web ACL ו-ALB אזורי?",
          ["ה-Web ACL צריך להיות באותו Region כמו ה-ALB", "ה-Web ACL חייב להיות ב-S3", "WAF עובד רק עם NLB", "WAF מחליף את כל Security Groups"],
          0,
          "בשקופית ALB מצוין שה-Web ACL חייב להיות באותו AWS Region כמו ה-ALB.",
        ),
      ],
    },
    {
      id: "nat-gateway",
      nav: "NAT",
      icon: "⇱",
      title: "NAT Gateway - יציאה מאובטחת מ-Private Subnet",
      intro:
        "NAT Gateway מאפשר למשאבים פרטיים לצאת החוצה, לרוב לאינטרנט, בלי לחשוף את כתובות ה-IP הפנימיות שלהם ובלי לאפשר חיבורים יזומים מבחוץ.",
      blocks: [
        {
          type: "lead",
          title: "מהו NAT Gateway",
          text:
            "NAT Gateway הוא רכיב רשת ב-AWS שתפקידו לאפשר למשאבים ב-Private Subnet ליזום תקשורת החוצה. הוא מחליף את כתובת ה-IP הפרטית של המופע בכתובת ציבורית של עצמו, וכשהתגובה חוזרת הוא יודע להעביר אותה למופע המתאים.",
        },
        {
          type: "cards",
          title: "תפקידים ומגבלות",
          cards: [
            {
              accent: "green",
              title: "Outbound only",
              text:
                "משאבים פרטיים יכולים ליזום יציאה החוצה, אבל אי אפשר ליזום אליהם חיבור מבחוץ דרך NAT Gateway.",
            },
            {
              accent: "blue",
              title: "Elastic IP",
              text:
                "ה-NAT Gateway נמצא ב-Public Subnet ומשתמש בכתובת ציבורית, בדרך כלל Elastic IP.",
            },
            {
              accent: "orange",
              title: "Private Subnet",
              text:
                "שרתים פרטיים יכולים להוריד עדכונים, לגשת ל-API של AWS או לשירותים חיצוניים בלי לקבל IP ציבורי.",
            },
            {
              accent: "purple",
              title: "Route Table",
              text:
                "ה-Route Table של ה-Private Subnet מפנה 0.0.0.0/0 אל NAT Gateway, לא אל Internet Gateway.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">תרשים NAT Gateway כטקסט פתוח</h3>
            <div class="nat-layout">
              <div class="nat-node" data-kind="private"><strong>Private EC2</strong><span>כתובת פרטית, למשל 10.0.1.0/24. אין IP ציבורי ואין כניסה ישירה מהאינטרנט.</span></div>
              <div class="nat-node" data-kind="control"><strong>Private Route Table</strong><span>יעד 10.0.0.0/16 נשאר Local; יעד 0.0.0.0/0 נשלח ל-NAT Gateway.</span></div>
              <div class="nat-node" data-kind="public"><strong>NAT Gateway ב-Public Subnet</strong><span>מבצע IP masquerading ומשתמש ב-EIP ציבורי.</span></div>
              <div class="nat-node" data-kind="control"><strong>Internet Gateway</strong><span>היציאה לאינטרנט מתבצעת דרך ה-Public Subnet וה-IGW.</span></div>
            </div>
          `,
        },
        {
          type: "table",
          title: "Route Tables לפי התרשים",
          headers: ["Route Table", "Destination", "Target", "מה זה אומר"],
          rows: [
            ["Public Route Table", "10.0.0.0/16", "Local", "תעבורה פנימית בתוך ה-VPC"],
            ["Public Route Table", "0.0.0.0/0", "Internet Gateway ID", "משאבים ציבוריים יוצאים ישירות לאינטרנט"],
            ["Private Route Table", "10.0.0.0/16", "Local", "תעבורה פנימית בתוך ה-VPC"],
            ["Private Route Table", "0.0.0.0/0", "NAT Gateway ID", "משאבים פרטיים יוצאים דרך NAT בלי להיחשף"],
          ],
        },
        {
          type: "callout",
          color: "purple",
          title: "NAT הישן מול NAT Gateway",
          text:
            "המצגת מציגה גם תרשים של NAT Instance הישן, שבו מופע EC2 עם EIP ביצע את התרגום. כיום לרוב משתמשים ב-NAT Gateway מנוהל, אבל העיקרון מאחורי הקלעים זהה: החלפת כתובת מקור פרטית בכתובת ציבורית והחזרת התגובה למקור הנכון.",
        },
      ],
      quiz: [
        makeQuestion(
          "מה תפקידו העיקרי של NAT Gateway?",
          ["לאפשר יציאה מאובטחת ממשאבים פרטיים לאינטרנט", "לאפשר כניסה ישירה מהאינטרנט ל-Private EC2", "להחליף את KMS", "לסנן SQL Injection"],
          0,
          "NAT Gateway מאפשר Outbound ממשאבים ב-Private Subnet בלי לחשוף אותם ישירות.",
        ),
        makeQuestion(
          "איפה צריך למקם NAT Gateway כדי שיוכל לצאת לאינטרנט?",
          ["Public Subnet", "Private Subnet בלבד", "בתוך KMS", "בתוך Web ACL"],
          0,
          "NAT Gateway נמצא ב-Public Subnet ומשתמש ב-Elastic IP.",
        ),
        makeQuestion(
          "לאן מפנה Private Route Table עבור 0.0.0.0/0 בתרשים NAT?",
          ["NAT Gateway ID", "Internet Gateway ID ישירות", "KMS Key", "Security Group ID"],
          0,
          "הנתיב החוצה של Private Subnet עובר דרך NAT Gateway.",
        ),
        makeQuestion(
          "מה NAT Gateway לא מאפשר?",
          ["חיבור יזום מבחוץ אל משאב פרטי", "הורדת עדכונים ממשאב פרטי", "גישה החוצה ל-API", "הסתרת IP פנימי"],
          0,
          "NAT Gateway הוא לרוב יציאה החוצה, לא כניסה יזומה פנימה.",
        ),
      ],
    },
    {
      id: "kms",
      nav: "KMS",
      icon: "🔑",
      title: "AWS Key Management Service - KMS",
      intro:
        "KMS עוסק בשאלה איך מגנים על נתונים עצמם. גם אם הרשת מוגנת, עדיין צריך להצפין מידע במנוחה ובמעבר, לשלוט במפתחות, ולדעת מי השתמש בהם ומתי.",
      blocks: [
        {
          type: "lead",
          title: "הדימוי של בית הקפה",
          text:
            "המצגת משתמשת בדימוי של בית קפה עם פריטים יקרים: מכונות, כסף ומלאי. כמו שבית הקפה צריך להגן על הפריטים במחסן ובזמן מעבר בין סניפים, כך צריך להגן על נתוני אפליקציות בזמן אחסון - הצפנה במנוחה - ובזמן שידור - הצפנה במעבר.",
        },
        {
          type: "cards",
          title: "מהו KMS ומה הוא מאפשר",
          cards: [
            {
              accent: "blue",
              title: "יצירת מפתחות",
              text:
                "יצירת מפתחות חדשים או יבוא מפתחות קיימים לפי מודל BYOK.",
            },
            {
              accent: "teal",
              title: "בקרת גישה",
              text:
                "קביעה מי יכול להשתמש במפתחות ולאילו פעולות: הצפנה, פענוח, יצירה, מחיקה או צפייה.",
            },
            {
              accent: "orange",
              title: "Audit",
              text:
                "כל שימוש במפתחות יכול להירשם ולעבור מעקב דרך AWS CloudTrail.",
            },
            {
              accent: "green",
              title: "שילוב עם שירותי AWS",
              text:
                "S3, EBS, RDS, Lambda, DynamoDB, Redshift ושירותים נוספים יכולים להשתמש במפתחות KMS להצפנה.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">מחזור חיים של מפתחות הצפנה עם KMS</h3>
            <div class="kms-cycle">
              <div class="kms-step"><b>1</b><strong>Create key</strong><span>מגדירים סוג מפתח, שימוש, Key Policy, IAM ו-Key Rotation.</span></div>
              <div class="kms-step"><b>2</b><strong>Store key</strong><span>המפתחות מאוחסנים בתוך HSMs מאושרים FIPS 140-3 Level 3.</span></div>
              <div class="kms-step"><b>3</b><strong>Encrypt / decrypt</strong><span>משתמשים במפתחות להצפנה ופענוח, כולל Envelope Encryption.</span></div>
              <div class="kms-step"><b>4</b><strong>Integrate</strong><span>מחברים KMS לשירותים כמו S3, EBS, RDS, Redshift ו-Lambda.</span></div>
              <div class="kms-step"><b>5</b><strong>Manage</strong><span>מבצעים Key Rotation, Audit, השבתה זמנית ובקרות גישה.</span></div>
              <div class="kms-step"><b>6</b><strong>IAM</strong><span>מגדירים מי רשאי להשתמש, לנהל או לצפות במפתחות.</span></div>
            </div>
          `,
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">Envelope Encryption לפי השקופית</h3>
            <div class="envelope-flow">
              <div class="envelope-node" data-kind="control"><strong>1. בקשת Data Key</strong><span>השירות או האפליקציה מבקשים מ-KMS מפתח נתונים.</span></div>
              <div class="envelope-node" data-kind="sensitive"><strong>2. מפתח לא מוצפן</strong><span>משמש מיידית להצפנת הנתונים, ואז נמחק מהזיכרון לאחר השימוש.</span></div>
              <div class="envelope-node" data-kind="safe"><strong>3. מפתח מוצפן</strong><span>נשמר יחד עם הנתונים המוצפנים כדי לאפשר פענוח בעתיד.</span></div>
              <div class="envelope-node" data-kind="control"><strong>4. פענוח</strong><span>המפתח המוצפן נשלח ל-KMS, שמחזיר מפתח לא מוצפן לצורך פענוח הנתונים.</span></div>
            </div>
          `,
        },
        {
          type: "table",
          title: "הגדרות מרכזיות ב-KMS",
          headers: ["מושג", "הסבר"],
          rows: [
            ["KMS Key", "מפתח הצפנה שמנוהל על ידי AWS KMS ומשמש להצפנה, פענוח או חתימה ואימות"],
            ["Symmetric key", "ברירת המחדל ל-Key Rotation אוטומטי אחת לשנה לפי המצגת"],
            ["Asymmetric key", "מפתח עם זוג ציבורי/פרטי, מתאים גם לחתימה או אימות"],
            ["Key Policy", "מדיניות שמגדירה מי יכול לגשת למפתח ואילו פעולות ניתן לבצע"],
            ["IAM permissions", "הרשאות למשתמשים, קבוצות או תפקידים להשתמש או לנהל מפתחות"],
            ["CloudTrail", "רישום שימוש במפתחות לצורכי Audit ובקרה"],
          ],
        },
        {
          type: "callout",
          color: "green",
          title: "סיכום KMS מהמצגת",
          text:
            "KMS מפשט את ניהול מפתחות ההצפנה, עוזר לשמור על סודיות הנתונים המאוחסנים ב-AWS, ומספק דרך מנוהלת, מאובטחת ומבוקרת לעבוד עם מפתחות.",
        },
      ],
      quiz: [
        makeQuestion(
          "מהו AWS KMS?",
          ["שירות מנוהל לניהול ושימוש במפתחות הצפנה", "שירות DNS", "חומת אש ל-HTTP בלבד", "Gateway לתרגום כתובות"],
          0,
          "KMS הוא Key Management Service.",
        ),
        makeQuestion(
          "מהו Data Key ב-Envelope Encryption?",
          ["מפתח נתונים שמשמש להצפנת המידע עצמו", "שם של Subnet", "כלל WAF", "פורט TCP"],
          0,
          "KMS יוצר Data Key, מחזיר גרסה לא מוצפנת לשימוש מיידי וגרסה מוצפנת לשמירה.",
        ),
        makeQuestion(
          "איפה נשמרים מפתחות KMS בצורה מאובטחת לפי המצגת?",
          ["ב-HSMs מאושרים FIPS 140-3 Level 3", "ב-HTML של האתר", "ב-NAT Gateway", "בתוך NACL"],
          0,
          "השקופית מציינת שהמפתחות מאוחסנים בתוך HSMs מאובטחים.",
        ),
        makeQuestion(
          "איזה שירות משמש למעקב אחר שימוש במפתחות?",
          ["AWS CloudTrail", "AWS Direct Connect", "Internet Gateway", "Route Table"],
          0,
          "KMS משתלב עם CloudTrail לצורכי audit.",
        ),
        makeQuestion(
          "איזו פעולה שייכת לניהול מפתחות ב-KMS?",
          ["Key Rotation", "פתיחת פורט 80", "יצירת Web ACL בלבד", "הוספת NACL Deny"],
          0,
          "המצגת מציינת החלפת מפתחות אוטומטית, Audit ובקרות גישה כחלק מניהול מפתחות.",
        ),
      ],
    },
    {
      id: "summary",
      nav: "סיכום",
      icon: "✓",
      title: "סיכום: שכבות אבטחה משלימות",
      intro:
        "הסיכום במצגת מחבר את כל השירותים: אף שירות לא מחליף את כולם. כל אחד מטפל בשכבה אחרת, וביחד הם יוצרים הגנה מלאה יותר על תשתית, אפליקציה ונתונים.",
      blocks: [
        {
          type: "table",
          title: "פתרונות האבטחה המרכזיים בשיעור",
          headers: ["שכבה", "שירותים", "מה הם עושים"],
          rows: [
            ["רשת", "Security Groups ו-NACLs", "בקרה על תעבורה נכנסת ויוצאת לתת-רשתות ולמופעים לפי פרוטוקול, פורט ו-IP"],
            ["Web", "AWS WAF", "סינון בקשות HTTP/HTTPS לפי חוקים, כולל SQL Injection, XSS, בוטים ועוד"],
            ["הצפנה", "AWS KMS", "יצירה, ניהול ובקרה של מפתחות הצפנה לשירותים כמו S3, EBS ו-RDS"],
            ["יציאה מאובטחת", "NAT Gateway", "יציאה לאינטרנט ממשאבים ב-Private Subnet בלי לחשוף IP פנימי"],
            ["זמינות", "AWS Shield", "הגנה מפני DDoS בשכבות רשת ותחבורה, עם יכולות מתקדמות ב-Advanced"],
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">מפת שקופיות לכיסוי האתר</h3>
            <div class="source-slide-map">
              <span>1-5: פתיחה, יעדי שיעור והקשר ל-Networking</span>
              <span>6: תזכורת Firewall</span>
              <span>7-14: NACL, Default ו-Custom</span>
              <span>15-24: Security Groups וברירות מחדל</span>
              <span>25-30: Stateful/Stateless ושאלות ידע</span>
              <span>31-33: DoS/DDoS וסוגי התקפות</span>
              <span>34-36: Shield Standard/Advanced</span>
              <span>37-44: WAF, Web ACL והשוואה מול Shield</span>
              <span>45-47: NAT Gateway</span>
              <span>48-58: KMS ומחזור חיי מפתחות</span>
              <span>59-62: סיכום ותודה</span>
            </div>
          `,
        },
        {
          type: "callout",
          color: "blue",
          title: "המשפט המסכם של השיעור",
          text:
            "AWS מספקת שכבות אבטחה משלימות מרמת הרשת ועד רמת האפליקציה והנתונים. האחריות של הלומד היא לדעת איפה כל שירות יושב, מה הוא כן עושה ומה הוא לא עושה.",
        },
      ],
      quiz: [
        makeQuestion(
          "איזה שירות מתאים להגנה ברמת Web מפני SQLi ו-XSS?",
          ["AWS WAF", "NAT Gateway", "NACL בלבד", "Direct Connect"],
          0,
          "WAF פועל ברמת L7 ובודק בקשות HTTP/S.",
        ),
        makeQuestion(
          "איזה שירות מתאים ליציאה מאובטחת מ-Private Subnet?",
          ["NAT Gateway", "AWS Shield", "KMS", "WAF"],
          0,
          "NAT Gateway מאפשר outbound מ-Private Subnet בלי לחשוף את המשאב.",
        ),
        makeQuestion(
          "איזה שירות מתאים לניהול מפתחות והצפנת נתונים?",
          ["KMS", "NACL", "Security Group", "VPC Peering"],
          0,
          "KMS מנהל מפתחות הצפנה ומשתלב עם שירותי AWS.",
        ),
        makeQuestion(
          "איזה שילוב הכי נכון לתיאור שכבות ההגנה?",
          [
            "NACL לרמת Subnet, SG לרמת משאב, WAF לרמת Web, KMS לנתונים",
            "כל השירותים עושים בדיוק אותו דבר",
            "KMS מסנן HTTP ו-WAF מנהל מפתחות",
            "NAT Gateway מחליף את כל מנגנוני האבטחה",
          ],
          0,
          "זהו החיבור המרכזי של סיכום המצגת.",
        ),
      ],
    },
  ],
  finalExam: [
    makeQuestion(
      "מה מתאר בצורה הטובה ביותר את תפקיד NACL?",
      ["חומת אש ברמת אפליקציית Web", "חומת אש ברמת Subnet", "שירות מפתחות הצפנה", "שירות DNS"],
      1,
      "NACL פועלת ברמת תת-הרשת ומסננת Inbound ו-Outbound.",
    ),
    makeQuestion(
      "מה מתאר בצורה הטובה ביותר את תפקיד Security Group?",
      ["שירות ניהול מפתחות", "חיבור פרטי ייעודי", "רשימת SQL", "חומת אש Stateful ברמת משאב"],
      3,
      "SG מוחל על משאבים כמו EC2 ו-RDS ושומר מצב.",
    ),
    makeQuestion(
      "איזה רכיב מאפשר Deny מפורש?",
      ["Security Group", "KMS Data Key", "NACL", "NAT Gateway"],
      2,
      "NACL תומך גם ב-Allow וגם ב-Deny. Security Group מגדיר Allow בלבד.",
    ),
    makeQuestion(
      "איזה רכיב הוא Stateful?",
      ["Security Group", "NACL", "Default Route", "KMS Key Policy בלבד"],
      0,
      "Security Group זוכר חיבורים ומאפשר את התגובה החוזרת.",
    ),
    makeQuestion(
      "מה נכון לגבי Default NACL?",
      ["חוסמת הכל תמיד", "עובדת רק עם HTTP", "מאפשרת את כל התעבורה הנכנסת והיוצאת", "מוצמדת רק ל-EC2"],
      2,
      "Default NACL מאפשרת Inbound ו-Outbound, אבל עדיין כוללת כלל Deny סופי.",
    ),
    makeQuestion(
      "מה נכון לגבי Custom NACL חדש?",
      ["מאפשר תמיד הכל", "חוסם את כל התעבורה עד לכללים מפורשים", "Stateful", "שייך ל-WAF"],
      1,
      "Custom NACL חדש מתחיל במצב חסום.",
    ),
    makeQuestion(
      "מה עושה DDoS?",
      ["מצפין מפתחות", "יוצר VPC", "מגדיר IAM Role", "מציף שירות כדי לפגוע בזמינות"],
      3,
      "DDoS היא Distributed Denial of Service.",
    ),
    makeQuestion(
      "איזה שירות נותן הגנת DDoS בסיסית ללא עלות?",
      ["Shield Standard", "Shield Advanced", "KMS", "NAT Gateway"],
      0,
      "Shield Standard כלול בכל חשבון AWS.",
    ),
    makeQuestion(
      "מה ההבדל המרכזי בין Shield ל-WAF?",
      ["Shield מנהל מפתחות ו-WAF מנתב NAT", "אין הבדל", "Shield מתמקד ב-DDoS L3/L4; WAF מסנן בקשות Web L7", "WAF עובד רק עם EBS"],
      2,
      "Shield עוסק בזמינות והתקפות רשת/תחבורה, WAF עוסק בשכבת אפליקציה.",
    ),
    makeQuestion(
      "איזה שירות מתאים לחסימת SQL Injection?",
      ["NAT Gateway", "AWS WAF", "Direct Connect", "Route Table"],
      1,
      "WAF בודק תוכן בקשות HTTP/S ומסוגל לחסום SQLi.",
    ),
    makeQuestion(
      "על איזה רכיב WAF לא נתמך ישירות לפי המצגת?",
      ["Application Load Balancer", "CloudFront", "API Gateway", "Network Load Balancer"],
      3,
      "WAF אינו תומך ב-NLB בשכבה 4.",
    ),
    makeQuestion(
      "מהו Web ACL?",
      ["אוסף חוקים של WAF", "כתובת IP ציבורית", "מפתח הצפנה לא מוצפן", "דיסק מקומי"],
      0,
      "Web ACL מגדיר את הכללים שעל פיהם WAF מטפל בבקשות.",
    ),
    makeQuestion(
      "מה תפקיד NAT Gateway?",
      ["לסנן XSS", "לאחסן מפתחות ב-HSM", "לאפשר למשאבים פרטיים לצאת החוצה בלי להיחשף", "לפתוח Inbound מהאינטרנט"],
      2,
      "NAT Gateway משמש בעיקר לתעבורה יוצאת מ-Private Subnet.",
    ),
    makeQuestion(
      "לאן מפנה Route Table פרטי עבור 0.0.0.0/0 בתרחיש NAT?",
      ["Internet Gateway ישירות", "NAT Gateway", "Web ACL", "KMS"],
      1,
      "Private Route Table מפנה Default Route אל NAT Gateway.",
    ),
    makeQuestion(
      "מהו KMS?",
      ["חומת אש L7", "Subnet פרטי", "שירות DDoS בלבד", "שירות ניהול מפתחות הצפנה"],
      3,
      "KMS מנהל מפתחות קריפטוגרפיים להצפנה ופענוח.",
    ),
    makeQuestion(
      "מהו BYOK בהקשר של KMS?",
      ["ייבוא מפתחות קיימים", "חסימת IP", "יצירת NAT", "סידור עדיפות ב-WAF"],
      0,
      "Bring Your Own Key פירושו להביא/לייבא מפתחות קיימים.",
    ),
    makeQuestion(
      "מהו HSM בהקשר השקופית על אחסון מפתחות?",
      ["חוק Firewall", "API Gateway", "מודול אבטחת חומרה שבו נשמרים מפתחות KMS", "Route Table"],
      2,
      "המפתחות נשמרים בתוך HSMs מאובטחים ומאושרים.",
    ),
    makeQuestion(
      "מה קורה ב-Envelope Encryption לאחר שימוש במפתח הנתונים הלא מוצפן?",
      ["הוא נשמר גלוי ליד הנתונים", "הוא נמחק מהזיכרון", "הוא הופך ל-NACL", "הוא נשלח ל-WAF"],
      1,
      "המפתח הלא מוצפן משמש להצפנה מיידית ואז נמחק מהזיכרון.",
    ),
    makeQuestion(
      "איזה שירות משמש ל-Audit של שימוש במפתחות KMS?",
      ["AWS Shield Standard", "NAT Gateway", "Security Group", "AWS CloudTrail"],
      3,
      "CloudTrail מתעד פעולות ושימושים במפתחות.",
    ),
    makeQuestion(
      "איזה סידור שכבות הוא הנכון ביותר?",
      [
        "KMS ב-Subnet, NACL ב-Web, WAF בנתונים",
        "NAT Gateway מחליף את WAF ו-KMS",
        "NACL ב-Subnet, SG במשאב, WAF ב-Web, Shield ב-DDoS, KMS בנתונים",
        "Shield מנהל Route Tables",
      ],
      2,
      "זו מפת השירותים המרכזית של השיעור.",
    ),
  ],
};
