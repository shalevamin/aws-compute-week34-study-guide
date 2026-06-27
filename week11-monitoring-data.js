const makeQuestion = (q, a, correct, explain) => ({ q, a, correct, explain });

window.studyGuide = {
  sections: [
    {
      id: "monitoring-overview",
      nav: "מבוא",
      icon: "◉",
      title: "מבוא לניטור, בקרה, לוגים והתראות בענן",
      intro:
        "השיעור עובר מהשאלה איך בונים תשתית בענן לשאלה איך יודעים מה קורה בה. בסביבת AWS מודרנית יש הרבה רכיבים, אזורי זמינות, משתמשים ושירותים. בלי ניטור, לוגים, בקרה והתראות אי אפשר להבין ביצועים, לזהות תקלות, לאכוף מדיניות או להגיב לאירועי אבטחה.",
      blocks: [
        {
          type: "lead",
          title: "הרעיון המרכזי של המצגת",
          text:
            "ניטור ובקרה הם לא שכבת נוחות. הם חלק קריטי מתפעול מערכת ענן: הם נותנים תמונת מצב בזמן אמת, מאפשרים לזהות חריגות לפני שהן הופכות לתקלה, עוזרים לייעל משאבים ועלויות, ומחזקים אבטחה באמצעות זיהוי פעולות חריגות או ניסיונות פגיעה.",
        },
        {
          type: "cards",
          title: "נושאי הלימוד בשבוע 11",
          cards: [
            {
              accent: "pink",
              title: "CloudTrail",
              text:
                "רישום פעולות וקריאות API: מי עשה פעולה, מתי, מאיזה מקור, באיזה שירות ועל איזה משאב.",
            },
            {
              accent: "green",
              title: "Inspector",
              text:
                "סריקת פגיעויות וחשיפות רשת בלתי מכוונות במשאבים כמו EC2, תמונות ECR ופונקציות Lambda.",
            },
            {
              accent: "red",
              title: "GuardDuty",
              text:
                "זיהוי איומים בזמן אמת מתוך לוגים ומקורות נתונים כמו CloudTrail, VPC Flow Logs ו-DNS.",
            },
            {
              accent: "purple",
              title: "CloudWatch",
              text:
                "מדדים, לוגים, התראות, דשבורדים ואירועים שמאפשרים ניטור ביצועים ותגובה.",
            },
            {
              accent: "blue",
              title: "AWS Config",
              text:
                "מעקב אחר תצורות משאבים, היסטוריית שינויים ובדיקת עמידה במדיניות.",
            },
            {
              accent: "teal",
              title: "Security Hub ו-SNS",
              text:
                "ריכוז ממצאי אבטחה במקום אחד והפצת התראות למערכות או אנשים שצריכים להגיב.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">מפת שירותים לפי תפקיד</h3>
            <div class="observability-stack">
              <div class="observability-card"><strong>רישום פעולות</strong><span>CloudTrail יוצר ראיות תפעוליות ואבטחתיות על פעולות בחשבון.</span></div>
              <div class="observability-card"><strong>בדיקת חולשות</strong><span>Inspector בודק פגיעויות מוכרות וחשיפות לא רצויות במשאבים.</span></div>
              <div class="observability-card"><strong>זיהוי איומים</strong><span>GuardDuty מזהה התנהגות חשודה ואיומים בזמן אמת.</span></div>
              <div class="observability-card"><strong>מדדים ולוגים</strong><span>CloudWatch אוסף Metrics, Logs ו-Alarms לתפעול שוטף.</span></div>
              <div class="observability-card"><strong>תאימות ותצורה</strong><span>AWS Config בודק האם המשאבים עומדים בחוקים שהוגדרו.</span></div>
              <div class="observability-card"><strong>ריכוז והפצה</strong><span>Security Hub מרכז ממצאים, SNS מפיץ הודעות למנויים.</span></div>
            </div>
          `,
        },
        {
          type: "callout",
          color: "blue",
          title: "משפט מפתח למבחן",
          text:
            "אם שואלים 'מי עשה פעולה?' חושבים CloudTrail. אם שואלים 'האם יש פגיעות?' חושבים Inspector. אם שואלים 'האם יש איום פעיל או פעילות חשודה?' חושבים GuardDuty. אם שואלים 'איך מודדים ומתרים?' חושבים CloudWatch. אם שואלים 'האם התצורה עומדת במדיניות?' חושבים AWS Config.",
        },
      ],
      quiz: [
        makeQuestion(
          "מה המטרה המרכזית של ניטור ובקרה בסביבת AWS?",
          ["להחליף את כל שירותי האבטחה", "לקבל נראות, לזהות חריגות ולהגיב בזמן", "למחוק לוגים ישנים בלבד", "ליצור Subnets חדשים"],
          1,
          "ניטור ובקרה נותנים נראות, זיהוי בעיות, אכיפת מדיניות ותגובה מהירה.",
        ),
        makeQuestion(
          "איזה שירות מתאים לשאלה: מי ביצע פעולה בחשבון AWS ומתי?",
          ["CloudTrail", "SNS", "Inspector", "Route 53"],
          0,
          "CloudTrail מתעד קריאות API ופעולות בחשבון.",
        ),
        makeQuestion(
          "איזה שירות מרכז ממצאי אבטחה ממספר מקורות במקום אחד?",
          ["AWS Config", "CloudWatch Logs", "Security Hub", "S3 Glacier"],
          2,
          "Security Hub נותן תמונת אבטחה מרכזית ומרכז Findings.",
        ),
        makeQuestion(
          "איזה שירות משמש להפצת הודעות והתראות במודל Pub/Sub?",
          ["GuardDuty", "SNS", "CloudTrail", "Inspector"],
          1,
          "SNS הוא שירות הודעות והתראות המבוסס על Publishers, Topic ו-Subscribers.",
        ),
      ],
    },
    {
      id: "monitoring-process",
      nav: "תהליך",
      icon: "↺",
      title: "תהליך ניטור ובקרה: מאיסוף נתונים עד תגובה",
      intro:
        "המצגת מציגה ניטור ובקרה כתהליך מתמשך, לא כפעולה חד-פעמית. קודם אוספים נתונים, אחר כך מנתחים אותם, מגדירים התראות, מציגים דוחות ודשבורדים, ובמקרים מתקדמים מפעילים אוטומציה לתגובה.",
      blocks: [
        {
          type: "cards",
          title: "למה ניטור ובקרה חשובים",
          cards: [
            {
              accent: "blue",
              title: "זמינות ואמינות",
              text:
                "מערכות ענן מפוזרות על פני אזורי זמינות ואזורים גיאוגרפיים. ניטור רציף עוזר לזהות תקלות בזמן אמת ולשמור על זמינות.",
            },
            {
              accent: "teal",
              title: "ביצועים",
              text:
                "מעקב אחרי עומסים, זמני תגובה ומשאבים מאפשר לזהות צווארי בקבוק ולבצע אופטימיזציה.",
            },
            {
              accent: "red",
              title: "אבטחה וציות",
              text:
                "מעקב אחרי פעולות משתמשים ושינויים בתצורה עוזר לזהות התנהגות חשודה ולעמוד בדרישות רגולציה.",
            },
            {
              accent: "orange",
              title: "ניהול עלויות",
              text:
                "ניטור צריכת משאבים מאפשר לזהות בזבוז ולהתאים את השימוש לצרכים האמיתיים.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">חמשת שלבי התהליך לפי המצגת</h3>
            <div class="process-flow">
              <div class="process-step"><b>1</b><strong>Data Collection</strong><span>איסוף נתונים בזמן אמת מכל שכבות המערכת: חומרה, תוכנה, רשת ויישומים.</span></div>
              <div class="process-step"><b>2</b><strong>Analysis</strong><span>ניתוח דפוסים, אנומליות ותחומי שיפור באמצעות כלים אנליטיים.</span></div>
              <div class="process-step"><b>3</b><strong>Alerts</strong><span>הפעלת התראות כאשר מדדים, פעולות או תצורות חורגים מהתקן.</span></div>
              <div class="process-step"><b>4</b><strong>Reports & Dashboards</strong><span>הצגת המידע בצורה גרפית וברורה לקבלת החלטות.</span></div>
              <div class="process-step"><b>5</b><strong>Automation</strong><span>תגובה אוטומטית לתקלות או תחזוקה מונעת כדי להפחית תלות ביד אדם.</span></div>
            </div>
          `,
        },
        {
          type: "table",
          title: "יתרונות מול אתגרים בענן",
          headers: ["צד חיובי", "מה הוא נותן", "האתגר שמולו מתמודדים"],
          rows: [
            ["נראות משופרת", "תמונה מלאה של משאבים ותהליכים", "הרבה רכיבים משתנים ודינמיים"],
            ["זמינות משופרת", "הפחתת השבתות וזיהוי מוקדם של תקלות", "מערכות מפוזרות גיאוגרפית"],
            ["יעילות ועלויות", "שימוש מדויק יותר במשאבים", "כמות נתונים גדולה לניתוח"],
            ["אבטחה ותאימות", "זיהוי חריגות ועמידה בתקנים", "קשה לעקוב ידנית אחרי כל שינוי"],
          ],
        },
      ],
      quiz: [
        makeQuestion(
          "מהו השלב הראשון בתהליך ניטור ובקרה לפי המצגת?",
          ["Automation", "Data Collection", "Dashboards", "Incident Management"],
          1,
          "לפני ניתוח והתראות צריך קודם לאסוף נתונים מהמערכת.",
        ),
        makeQuestion(
          "איזה שלב נועד לזהות דפוסים ואנומליות מתוך המידע שנאסף?",
          ["Analysis", "S3 Versioning", "DNS Routing", "IAM Federation"],
          0,
          "Analysis הוא ניתוח הנתונים כדי למצוא דפוסים, חריגות ותחומי שיפור.",
        ),
        makeQuestion(
          "איזה אתגר אופייני במיוחד לסביבת ענן?",
          ["משאבים סטטיים שלא משתנים", "מערכת אחת בלבד ללא רשת", "דינמיות ומורכבות רשתית", "אין צורך בלוגים"],
          2,
          "בענן משאבים נוצרים, משתנים ונמחקים במהירות, והסביבה מורכבת ומפוזרת.",
        ),
        makeQuestion(
          "למה דשבורדים ודוחות חשובים?",
          ["הם מחליפים את כל הלוגים", "הם מציגים מידע בצורה ברורה לקבלת החלטות", "הם סוג של מפתח הצפנה", "הם פותחים פורטים אוטומטית"],
          1,
          "Reports and Dashboards עוזרים לראות מצב מערכת, מגמות וחריגות בצורה מובנת.",
        ),
      ],
    },
    {
      id: "cloudtrail",
      nav: "CloudTrail",
      icon: "CT",
      title: "AWS CloudTrail - רישום פעולות וראיות בחשבון",
      intro:
        "CloudTrail הוא שירות שמאפשר לעקוב אחרי פעילויות בחשבון AWS. הוא מתעד קריאות לשירותי AWS ומספק יומנים שמאפשרים להבין מי עשה פעולה, מתי, מאיפה, באיזה שירות ומה בדיוק קרה.",
      blocks: [
        {
          type: "lead",
          title: "מה CloudTrail מתעד",
          text:
            "CloudTrail מתעד כל קריאת API משמעותית בחשבון, בין אם היא נעשתה על ידי משתמש, Role או שירות. הרשומה כוללת פרטים כמו זהות המשתמש או השירות, זמן הפעולה, מקור הבקשה, כתובת IP, שם הפעולה, השירות שאליו פנו, האזור והמשאבים שהושפעו.",
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">זרימת CloudTrail לפי התרשים במצגת</h3>
            <div class="cloudtrail-flow">
              <div class="flow-node"><strong>Management Events</strong><span>פעולות ניהול כמו יצירה, שינוי או מחיקה של משאבים.</span></div>
              <div class="flow-node"><strong>Data Events</strong><span>פעולות על נתונים עצמם, למשל GetObject או PutObject ב-S3.</span></div>
              <div class="flow-node"><strong>Insights Events</strong><span>זיהוי דפוס חריג בפעולות החשבון.</span></div>
              <div class="flow-node"><strong>CloudTrail</strong><span>יוצר Event History ולוגים של הפעילות.</span></div>
              <div class="flow-node"><strong>S3 / Athena</strong><span>שמירת לוגים לטווח ארוך ב-S3 וניתוח שאילתות, למשל עם Athena.</span></div>
            </div>
          `,
        },
        {
          type: "cards",
          title: "יתרונות CloudTrail",
          cards: [
            {
              accent: "blue",
              title: "נראות ושקיפות",
              text:
                "מידע מפורט על כל פעולה: המשתמש, הזמן, הפעולה, השירות והפרטים הטכניים.",
            },
            {
              accent: "red",
              title: "שיפור אבטחה",
              text:
                "זיהוי פעולות חריגות, ניסיונות גישה לא מורשים ושינויים בתצורה קריטית.",
            },
            {
              accent: "purple",
              title: "Compliance",
              text:
                "תיעוד פעולות בצורה מסודרת עוזר לעמוד בדרישות רגולציה וביקורת.",
            },
            {
              accent: "teal",
              title: "אינטגרציות",
              text:
                "שילוב עם CloudWatch, Lambda, AWS Config וכלי SIEM לתגובה ואנליזה.",
            },
          ],
        },
        {
          type: "callout",
          color: "teal",
          title: "דימוי מהמצגת",
          text:
            "CloudTrail דומה ל-Event Viewer ב-Windows: מקום שבו אפשר לחזור אחורה ולראות פעולות מערכת ומשתמשים, רק ברמת חשבון AWS ושירותי הענן.",
        },
      ],
      quiz: [
        makeQuestion(
          "מה CloudTrail מאפשר לדעת?",
          ["רק כמה CPU נצרך", "מי ביצע פעולה, מתי ומה הייתה הפעולה", "איזה צבע יש לדשבורד", "כמה משתמשים רשומים ל-SNS Topic"],
          1,
          "CloudTrail מתעד זהות, זמן, פעולה, מקור, שירות ומשאבים.",
        ),
        makeQuestion(
          "לאיזה צורך CloudTrail חשוב במיוחד?",
          ["תיעוד וביקורת של פעולות", "ניהול DNS", "החלפת NAT Gateway", "אחסון תמונות Docker בלבד"],
          0,
          "CloudTrail מספק ראיות על פעולות בחשבון ומשמש לביקורת, אבטחה ותאימות.",
        ),
        makeQuestion(
          "איזה סוג אירוע מתאר פעולה על אובייקט S3 כמו GetObject?",
          ["Management Event", "Data Event", "SNS Topic", "VPC Endpoint"],
          1,
          "Data Events הם פעולות על נתונים עצמם, למשל קריאה או כתיבה של אובייקט.",
        ),
        makeQuestion(
          "מה אפשר לעשות עם לוגים שנשמרים ב-S3?",
          ["לנתח אותם לטווח ארוך, למשל עם Athena", "להפוך אותם ל-Security Group", "למחוק את כל ה-Regions", "להחליף אותם ב-EIP"],
          0,
          "המצגת מציגה שמירת לוגים ב-S3 וניתוח באמצעות Athena.",
        ),
      ],
    },
    {
      id: "cloudtrail-deep-dive",
      nav: "Event History",
      icon: "EH",
      title: "CloudTrail Event History, פרטי אירוע ויצירת Trail",
      intro:
        "המצגת לא מסתפקת בהגדרה של CloudTrail. היא מראה איך נראית רשימת אירועים, איך עושים Zoom-in לאירוע בודד, אילו שדות מוצאים ב-JSON, ואיך יוצרים Trail ששומר לוגים לטווח ארוך.",
      blocks: [
        {
          type: "html",
          html: `
            <h3 class="block-title">Event History כטבלת HTML במקום צילום מסך</h3>
            <div class="event-history-table">
              <table>
                <thead>
                  <tr><th>Event name</th><th>Event time</th><th>User name</th><th>Event source</th><th>Resources</th></tr>
                </thead>
                <tbody>
                  <tr><td>ConsoleLogin</td><td>May 12, 2024</td><td>root</td><td>signin.amazonaws.com</td><td>-</td></tr>
                  <tr><td>SendMessage</td><td>May 05, 2024</td><td>root</td><td>q.amazonaws.com</td><td>-</td></tr>
                  <tr><td><span class="event-highlight">CreateSecurityGroup</span></td><td>May 04, 2024, 17:42:22</td><td>root</td><td>ec2.amazonaws.com</td><td>VPC, Security Group</td></tr>
                  <tr><td>DeleteSecurityGroup</td><td>May 04, 2024</td><td>root</td><td>ec2.amazonaws.com</td><td>Security Group</td></tr>
                  <tr><td>CreateNetworkAcl</td><td>May 04, 2024</td><td>root</td><td>ec2.amazonaws.com</td><td>VPC, Network ACL</td></tr>
                </tbody>
              </table>
            </div>
          `,
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">Zoom-in על אירוע CreateSecurityGroup</h3>
            <div class="event-detail-panel">
              <table>
                <thead><tr><th>שדה</th><th>ערך לדוגמה מתוך השקופית</th><th>מה לומדים מזה</th></tr></thead>
                <tbody>
                  <tr><td>Event time</td><td>May 04, 2024, 17:42:22</td><td>מתי הפעולה בוצעה.</td></tr>
                  <tr><td>User name</td><td>root</td><td>מי ביצע את הפעולה.</td></tr>
                  <tr><td>Event name</td><td>CreateSecurityGroup</td><td>שם הפעולה שנעשתה.</td></tr>
                  <tr><td>Event source</td><td>ec2.amazonaws.com</td><td>באיזה שירות הפעולה נעשתה.</td></tr>
                  <tr><td>Source IP address</td><td>176.230.225.145</td><td>מאיזו כתובת הגיעה הבקשה.</td></tr>
                  <tr><td>AWS region</td><td>us-east-1</td><td>באיזה Region הפעולה התרחשה.</td></tr>
                  <tr><td>Read-only</td><td>false</td><td>זו לא צפייה בלבד; זו פעולה שמשנה מצב.</td></tr>
                </tbody>
              </table>
            </div>
          `,
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">ארבע שאלות שחייבים לדעת לשאול על כל אירוע</h3>
            <div class="question-explain-grid">
              <div><strong>What happened?</strong><span>לדוגמה: IAM user חדש נוצר או Security Group חדש נוצר.</span></div>
              <div><strong>Who made the request?</strong><span>לדוגמה: משתמש root, IAM user או Role מסוים.</span></div>
              <div><strong>When did this occur?</strong><span>זמן מדויק של הפעולה, כולל תאריך ושעה.</span></div>
              <div><strong>How was the request made?</strong><span>דרך AWS Management Console, CLI, SDK או API.</span></div>
            </div>
          `,
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">דוגמת JSON מקוצרת של CloudTrail</h3>
            <pre class="json-sample">{
  "eventVersion": "1.09",
  "userIdentity": {
    "type": "Root",
    "arn": "arn:aws:iam::1234567890:root",
    "accountId": "1234567890",
    "sessionContext": {
      "attributes": {
        "creationDate": "2024-05-04T08:19:27Z",
        "mfaAuthenticated": "true"
      }
    }
  },
  "eventTime": "2024-05-04T14:42:22Z",
  "eventSource": "ec2.amazonaws.com",
  "eventName": "CreateSecurityGroup",
  "awsRegion": "us-east-1",
  "sourceIPAddress": "176.230.225.145",
  "requestParameters": {
    "groupName": "myTest",
    "groupDescription": "allow",
    "vpcId": "vpc-04e50a5903c567f73"
  }
}</pre>
          `,
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">Trail ויכולות מתקדמות</h3>
            <div class="trail-options">
              <div class="trail-node"><strong>Event History</strong><span>גישה להיסטוריית אירועים עד 90 יום דרך הקונסולה.</span></div>
              <div class="trail-node"><strong>Trail</strong><span>שמירת לוגים לטווח ארוך ב-S3, ובאפשרות גם שליחה ל-CloudWatch Logs.</span></div>
              <div class="trail-node"><strong>Multi-region Trail</strong><span>מעקב אחרי פעולות בכל האזורים. דרך הקונסולה זו ברירת המחדל.</span></div>
              <div class="trail-node"><strong>CLI / API</strong><span>אפשר ליצור Trail לאזור ספציפי עם create-trail ופרמטר multi-region=false.</span></div>
              <div class="trail-node"><strong>Insights</strong><span>זיהוי אנומליות בפעולות החשבון והתרעה על פעילות חריגה.</span></div>
            </div>
          `,
        },
      ],
      quiz: [
        makeQuestion(
          "מה ההבדל בין Event History לבין Trail?",
          ["אין הבדל", "Event History הוא היסטוריה זמינה בקונסולה; Trail שומר לוגים לטווח ארוך", "Trail הוא שירות DNS", "Event History שומר רק תמונות"],
          1,
          "Event History נותן צפייה באירועים, Trail מיועד לשמירה והעברה של לוגים לאורך זמן.",
        ),
        makeQuestion(
          "איזה שדה בדוגמת CloudTrail אומר איזו פעולה בוצעה?",
          ["eventName", "sourceIPAddress", "awsRegion", "userAgent בלבד"],
          0,
          "eventName מציין את שם הפעולה, למשל CreateSecurityGroup.",
        ),
        makeQuestion(
          "מה מציין sourceIPAddress?",
          ["אזור AWS", "כתובת המקור שממנה הגיעה הבקשה", "שם ה-S3 Bucket", "שם ה-Topic"],
          1,
          "sourceIPAddress עוזר להבין מאיפה הגיעה הקריאה לשירות.",
        ),
        makeQuestion(
          "מה נכון לגבי יצירת Trail דרך הקונסולה לפי המצגת?",
          ["נוצר כברירת מחדל כ-Multi-Region", "אפשר רק באזור אחד", "אי אפשר לשמור ב-S3", "הוא עובד רק עם SNS"],
          0,
          "בשקופית נאמר ש-Trails שנוצרים דרך הקונסולה נוצרים כברירת מחדל כ-Multi-Region.",
        ),
      ],
    },
    {
      id: "inspector",
      nav: "Inspector",
      icon: "IN",
      title: "Amazon Inspector - ניהול פגיעויות אוטומטי",
      intro:
        "Inspector הוא שירות Vulnerability Management אוטומטי. הוא לא מחפש התנהגות חשודה בזמן אמת כמו GuardDuty, אלא סורק משאבים כדי לזהות פגיעויות תוכנה וחשיפות רשת בלתי מכוונות.",
      blocks: [
        {
          type: "lead",
          title: "מה Inspector בודק",
          text:
            "Amazon Inspector מבצע סריקות אוטומטיות ורציפות של משאבים כמו מופעי Amazon EC2, תמונות מיכלים ב-ECR ופונקציות Lambda. הוא מזהה פגיעויות ידועות, CVEs, חשיפות רשת לא מכוונות ומפיק ממצאים עם חומרה, השפעה והמלצות לתיקון.",
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">טווח הסריקה של Inspector</h3>
            <div class="inspector-scope">
              <div class="scope-card"><strong>Amazon EC2</strong><span>סריקת מערכות הפעלה, חבילות ותצורות רשת על גבי אינסטנסים.</span></div>
              <div class="scope-card"><strong>ECR Images</strong><span>בדיקת תמונות מיכלים לפני או בזמן שימוש, כדי לזהות CVEs.</span></div>
              <div class="scope-card"><strong>AWS Lambda</strong><span>סריקת פונקציות ותלויות תוכנה כדי לזהות פגיעויות בקוד ובחבילות.</span></div>
            </div>
          `,
        },
        {
          type: "cards",
          title: "תכונות ויתרונות",
          cards: [
            {
              accent: "green",
              title: "סריקות ממוקדות",
              text:
                "בדיקות על משאבים ספציפיים, תצורות ותעבורת רשת, לפי כללים ותבניות.",
            },
            {
              accent: "blue",
              title: "חוקים מוכנים מראש",
              text:
                "כללי אבטחה המבוססים על Best Practices וסטנדרטים מוכרים, לצד התאמות ארגוניות.",
            },
            {
              accent: "orange",
              title: "דוחות מפורטים",
              text:
                "פירוט הבעיות, הערכת סיכון, חומרה, CVSS והמלצות לפתרון.",
            },
            {
              accent: "purple",
              title: "אינטגרציות",
              text:
                "שילוב עם CloudTrail למעקב שינויים ועם CloudWatch להתראות וניטור.",
            },
          ],
        },
        {
          type: "callout",
          color: "green",
          title: "מה לא להתבלבל",
          text:
            "Inspector עונה על השאלה 'איפה יש חולשה או חשיפה שצריך לתקן?'. הוא לא השירות המרכזי לזיהוי פעילות זדונית בזמן אמת - זה התפקיד של GuardDuty.",
        },
      ],
      quiz: [
        makeQuestion(
          "מהו התפקיד המרכזי של Amazon Inspector?",
          ["ניהול פגיעויות וסריקת חשיפות", "הפצת הודעות SMS", "ניהול DNS", "שמירת קבצים בארכיון"],
          0,
          "Inspector הוא שירות Vulnerability Management אוטומטי.",
        ),
        makeQuestion(
          "איזה משאב אינו מופיע במצגת כחלק מטווח הסריקה המרכזי של Inspector?",
          ["EC2", "ECR Images", "Lambda", "Route 53 Hosted Zone"],
          3,
          "המצגת מציינת EC2, תמונות ECR ו-Lambda.",
        ),
        makeQuestion(
          "מהו CVE בהקשר Inspector?",
          ["מזהה של פגיעות מוכרת", "סוג של Topic", "אזור AWS", "כלל NAT"],
          0,
          "CVE הוא Common Vulnerabilities and Exposures - מזהה לפגיעות ידועה.",
        ),
        makeQuestion(
          "איזה מידע Inspector יכול לכלול בממצא?",
          ["חומרה, משאב מושפע והמלצות תיקון", "רק צבע האייקון", "רק שם ה-Region", "רק כמות Subscribers"],
          0,
          "הממצא כולל פרטי פגיעות, חומרה, משאב מושפע והמלצות לתיקון.",
        ),
      ],
    },
    {
      id: "guardduty",
      nav: "GuardDuty",
      icon: "GD",
      title: "Amazon GuardDuty - זיהוי איומים בזמן אמת",
      intro:
        "GuardDuty הוא שירות Threat Detection שמנטר ברציפות את סביבת AWS ומחפש סיכוני אבטחה. הוא מנתח מקורות נתונים קיימים ומנסה לזהות דפוסים חריגים, גישות לא מורשות, פעילות זדונית או חשד למיצוי מידע.",
      blocks: [
        {
          type: "html",
          html: `
            <h3 class="block-title">מקורות נתונים ש-GuardDuty מנתח</h3>
            <div class="guardduty-sources">
              <div class="source-card"><strong>CloudTrail</strong><span>יומני אירועים ופעולות בחשבון AWS.</span></div>
              <div class="source-card"><strong>VPC Flow Logs</strong><span>תעבורת רשת ממופעי EC2 ומשאבים ברשת.</span></div>
              <div class="source-card"><strong>DNS Logs</strong><span>שאילתות DNS שיכולות להצביע על פעילות חריגה.</span></div>
              <div class="source-card"><strong>EKS Audit Logs</strong><span>פעולות ביקורת בסביבות Kubernetes מנוהלות.</span></div>
              <div class="source-card"><strong>RDS Login Activity</strong><span>פעילות כניסה למסדי נתונים.</span></div>
              <div class="source-card"><strong>S3 / EBS ועוד</strong><span>נתוני פעילות נוספים משירותי AWS רלוונטיים.</span></div>
            </div>
          `,
        },
        {
          type: "cards",
          title: "תכונות מרכזיות",
          cards: [
            {
              accent: "red",
              title: "ניטור בזמן אמת",
              text:
                "השירות פועל ברציפות ומנתח נתונים ממספר מקורות כדי לזהות פעילות חשודה.",
            },
            {
              accent: "purple",
              title: "Machine Learning ומודיעין איומים",
              text:
                "GuardDuty משתמש בלמידת מכונה, אנליטיקה מתקדמת ומידע מודיעיני על איומים.",
            },
            {
              accent: "orange",
              title: "התראות והמלצות",
              text:
                "מספק Findings בזמן אמת והמלצות לפעולות מתקנות.",
            },
            {
              accent: "blue",
              title: "שילוב עם שירותים אחרים",
              text:
                "מתחבר ל-Security Hub, CloudWatch וכלים נוספים כדי לרכז התראות וליצור תגובה.",
            },
          ],
        },
        {
          type: "list",
          title: "שימושים עיקריים לפי המצגת",
          items: [
            "זיהוי גישות לא מורשות למשאבים.",
            "זיהוי שינויים חריגים בלוגים או בתעבורת רשת.",
            "איתור חיפושים זדוניים בדאטה או איסוף מידע חשוד.",
            "שיפור תגובה לאירועי אבטחה באמצעות התראות בזמן אמת.",
            "תמיכה בתהליכי תאימות באמצעות דוחות על פעילות חשודה.",
          ],
        },
        {
          type: "callout",
          color: "red",
          title: "נקודה חשובה מהסיכום",
          text:
            "GuardDuty מזהה ומתריע, אבל אינו מתקן לבד את הבעיה. כדי לבצע תגובה אוטומטית משלבים אותו עם שירותים כמו Lambda, CloudWatch ו-Security Hub.",
        },
      ],
      quiz: [
        makeQuestion(
          "מה GuardDuty עושה?",
          ["מזהה איומים ופעילות חשודה", "יוצר S3 Bucket", "מנהל מפתחות הצפנה", "מחליף את CloudTrail"],
          0,
          "GuardDuty הוא שירות זיהוי איומים שמנטר ברציפות את סביבת AWS.",
        ),
        makeQuestion(
          "איזה מקור נתונים מופיע במצגת כמקור ש-GuardDuty מנתח?",
          ["VPC Flow Logs", "HTML CSS", "Route 53 Domain Transfer בלבד", "EBS Snapshot name בלבד"],
          0,
          "המצגת מציינת CloudTrail, VPC Flow Logs, DNS Logs ועוד.",
        ),
        makeQuestion(
          "מה GuardDuty לא עושה בעצמו לפי הסיכום?",
          ["מזהה ממצאים", "מתקן אוטומטית כל בעיה ללא שילוב נוסף", "מספק התראות", "משתלב עם Security Hub"],
          1,
          "המצגת מדגישה שהוא לא מטפל אוטומטית בכל בעיה אלא נדרש שילוב עם שירותים אחרים.",
        ),
        makeQuestion(
          "איזה שילוב מתאים לתגובה אוטומטית לממצא GuardDuty?",
          ["GuardDuty עם Lambda ו-CloudWatch", "GuardDuty עם Word בלבד", "GuardDuty עם Route Table בלבד", "GuardDuty עם צבע רקע"],
          0,
          "Lambda ו-CloudWatch יכולים להפעיל תגובה אוטומטית בעקבות ממצא.",
        ),
      ],
    },
    {
      id: "inspector-vs-guardduty",
      nav: "השוואה",
      icon: "VS",
      title: "Inspector מול GuardDuty - שני שירותים שונים לגמרי",
      intro:
        "השקופית המשווה חשובה למבחן: Inspector ו-GuardDuty שניהם שירותי אבטחה, אבל הם עונים על שאלות שונות. Inspector מחפש חולשות ופגיעויות במשאבים. GuardDuty מחפש איומים והתנהגות חשודה בזמן אמת.",
      blocks: [
        {
          type: "html",
          html: `
            <h3 class="block-title">טבלת השוואה למבחן</h3>
            <div class="comparison-matrix">
              <table>
                <thead><tr><th>קריטריון</th><th>Amazon Inspector</th><th>Amazon GuardDuty</th></tr></thead>
                <tbody>
                  <tr><td>שאלה מרכזית</td><td>האם במשאב שלי קיימת פגיעות או חשיפת רשת?</td><td>האם מתרחשת פעילות חשודה או איום פעיל?</td></tr>
                  <tr><td>סוג השירות</td><td>Vulnerability Management</td><td>Threat Detection</td></tr>
                  <tr><td>מיקוד</td><td>EC2, ECR, Lambda, CVE, CVSS ותיקון חולשות</td><td>לוגים, תעבורת רשת, DNS, התנהגות משתמשים ואיומים</td></tr>
                  <tr><td>זמן פעולה</td><td>סריקות אוטומטיות ומתמשכות או מתוזמנות</td><td>ניטור מתמשך בזמן אמת</td></tr>
                  <tr><td>תוצאה</td><td>ממצאי חולשה והמלצות תיקון</td><td>ממצאי איום והתראות על פעילות חשודה</td></tr>
                  <tr><td>מה צריך לזכור</td><td>בודק מה חלש או חשוף</td><td>בודק מי מתנהג מוזר או מסוכן</td></tr>
                </tbody>
              </table>
            </div>
          `,
        },
        {
          type: "cards",
          title: "דוגמאות מהירות",
          cards: [
            {
              accent: "green",
              title: "ספריית תוכנה עם CVE",
              text:
                "זו דוגמה ל-Inspector: הוא יזהה פגיעות ידועה ויציע תיקון.",
            },
            {
              accent: "red",
              title: "גישה חשודה ממיקום חריג",
              text:
                "זו דוגמה ל-GuardDuty: התנהגות חריגה מתוך לוגים ופעילות חשבון.",
            },
            {
              accent: "orange",
              title: "פורט פתוח בטעות",
              text:
                "Inspector יכול לזהות חשיפת רשת; AWS Config יכול לבדוק מדיניות מוגדרת סביב זה.",
            },
            {
              accent: "blue",
              title: "ממצא מרוכז בארגון",
              text:
                "Security Hub יכול לקבל ממצאים גם מ-Inspector וגם מ-GuardDuty.",
            },
          ],
        },
        {
          type: "callout",
          color: "blue",
          title: "ניסוח קצר לזיכרון",
          text:
            "Inspector = בדיקת מצב המשאבים. GuardDuty = זיהוי התנהגות חשודה ואיומים.",
        },
      ],
      quiz: [
        makeQuestion(
          "איזה שירות מתאים לזיהוי CVE בתמונת ECR?",
          ["GuardDuty", "SNS", "Inspector", "CloudFront"],
          2,
          "Inspector בודק פגיעויות מוכרות במשאבים ובתמונות מיכלים.",
        ),
        makeQuestion(
          "איזה שירות מתאים לזיהוי פעילות חשודה מתוך CloudTrail ו-VPC Flow Logs?",
          ["GuardDuty", "Inspector", "S3 Standard", "AWS Backup"],
          0,
          "GuardDuty מנתח לוגים ומקורות נתונים כדי לזהות איומים.",
        ),
        makeQuestion(
          "מה ההבדל הכי חשוב בין השירותים?",
          ["אין הבדל", "Inspector מחפש חולשות; GuardDuty מחפש איומים", "GuardDuty מנהל מפתחות; Inspector שולח SMS", "שניהם שירותי DNS"],
          1,
          "זו ההבחנה המרכזית של השקופית.",
        ),
        makeQuestion(
          "לאן אפשר לרכז ממצאים משני השירותים?",
          ["Security Hub", "NAT Gateway", "EBS Volume", "IAM Password Policy בלבד"],
          0,
          "Security Hub מרכז Findings ממספר שירותי אבטחה, כולל Inspector ו-GuardDuty.",
        ),
      ],
    },
    {
      id: "cloudwatch",
      nav: "CloudWatch",
      icon: "CW",
      title: "AWS CloudWatch - מדדים, לוגים, התראות ודשבורדים",
      intro:
        "CloudWatch הוא שירות ניטור וניהול שמאפשר מעקב בזמן אמת אחרי משאבי AWS והיישומים שמופעלים עליהם. הוא מספק מדדים, לוגים, התראות, דשבורדים ואירועים, כדי להבין ביצועים ולהגיב לתקלות.",
      blocks: [
        {
          type: "cards",
          title: "התכונות המרכזיות של CloudWatch",
          cards: [
            {
              accent: "blue",
              title: "Metrics",
              text:
                "מדדים כגון CPU, תעבורת רשת, מצב דיסקים, שימוש במשאבים ומדדים של שירותים כמו EC2, RDS, S3 ו-Lambda.",
            },
            {
              accent: "purple",
              title: "CloudWatch Logs",
              text:
                "איסוף, מעקב וחיפוש בלוגים ממקורות שונים כדי להבין ביצועים ובעיות ביישומים.",
            },
            {
              accent: "red",
              title: "Alarms",
              text:
                "התראות שמופעלות כאשר מדדים חורגים מערכים מוגדרים מראש.",
            },
            {
              accent: "teal",
              title: "Dashboards",
              text:
                "לוחות מחוונים מותאמים להצגת מדדים והתראות בצורה ויזואלית וברורה.",
            },
            {
              accent: "orange",
              title: "Events",
              text:
                "ניטור שינויים במצב משאבים ותזמון פעולות אוטומטיות בתגובה לאירועים.",
            },
            {
              accent: "green",
              title: "Integrations",
              text:
                "שילוב עם Lambda, SNS, SQS ושירותים נוספים כדי להפעיל תגובות אוטומטיות.",
            },
          ],
        },
        {
          type: "table",
          title: "שימושים עיקריים",
          headers: ["שימוש", "מה בודקים", "מה עושים עם זה"],
          rows: [
            ["ניטור ביצועים", "עומסים, CPU, רשת, זמני תגובה", "זיהוי צווארי בקבוק ושיפור ביצועים"],
            ["אבטחה ותגובה", "אירועים חשודים והתראות", "תגובה מהירה או הפעלת אוטומציה"],
            ["חוויית משתמש", "זמן תגובה ותקינות שירות", "שמירה על חוויה יציבה"],
            ["אופטימיזציה", "שימוש במשאבים", "התאמת תשתיות לביצועים הנדרשים"],
          ],
        },
        {
          type: "diagram-flow",
          title: "זרימת CloudWatch בסיסית",
          cols: 4,
          steps: [
            { title: "1. משאב", text: "EC2, RDS, S3, Lambda או יישום שולחים מדדים ולוגים.", color: "var(--blue)" },
            { title: "2. CloudWatch", text: "השירות אוסף Metrics ו-Logs ומציג אותם.", color: "var(--teal)" },
            { title: "3. Alarm", text: "כאשר ערך חורג מסף, נוצרת התראה.", color: "var(--orange)" },
            { title: "4. Action", text: "ההתראה יכולה להפעיל SNS, Lambda או פעולה אחרת.", color: "var(--green)" },
          ],
        },
      ],
      quiz: [
        makeQuestion(
          "מהו CloudWatch?",
          ["שירות ניטור וניהול למדדים, לוגים והתראות", "שירות DNS", "שירות לניהול מפתחות", "שירות לאחסון ארכיוני בלבד"],
          0,
          "CloudWatch מרכז יכולות ניטור, Logs, Metrics, Alarms ודשבורדים.",
        ),
        makeQuestion(
          "איזה רכיב CloudWatch מופעל כאשר מדד חורג מסף מוגדר?",
          ["Dashboard", "Alarm", "S3 Object", "NACL"],
          1,
          "Alarm הוא מנגנון התראה על חריגה מערכים שהוגדרו.",
        ),
        makeQuestion(
          "מה CloudWatch Logs מאפשר?",
          ["איסוף, חיפוש וניתוח לוגים", "יצירת IAM User בלבד", "הצפנת Data Key", "מחיקת GuardDuty"],
          0,
          "CloudWatch Logs מיועד לאיסוף וניתוח לוגים ממקורות שונים.",
        ),
        makeQuestion(
          "איזה שירות יכול לקבל פעולה מ-CloudWatch Alarm לצורך הודעה?",
          ["SNS", "EBS Snapshot בלבד", "VPC CIDR", "AMI Name"],
          0,
          "התראות CloudWatch יכולות לשלוח הודעה דרך SNS.",
        ),
      ],
    },
    {
      id: "config",
      nav: "Config",
      icon: "CFG",
      title: "AWS Config - תצורה, היסטוריה ותאימות",
      intro:
        "AWS Config הוא שירות מנוהל שמאפשר הערכה, ביקורת וניטור של הגדרות המשאבים בחשבון AWS. הוא נותן שקיפות על מבנה התשתית, שומר היסטוריית תצורה, ומאפשר לבדוק האם משאבים עומדים במדיניות.",
      blocks: [
        {
          type: "lead",
          title: "AWS Config כמכונת זמן של התשתית",
          text:
            "המצגת מתארת את Config כמנגנון שמאפשר לחזור אחורה בציר הזמן של כל משאב. במקום לראות רק את המצב הנוכחי, אפשר להבין איך המשאב השתנה, מתי הוא השתנה, ומה היה לפני ואחרי השינוי.",
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">שלושת התפקידים המרכזיים מהשקופית</h3>
            <div class="config-role-grid">
              <div class="config-role-card" data-role="history"><strong>תיעוד היסטורי</strong><span>שמירת ה-Configuration History לצורכי ביקורת פנימית וחיצונית לאורך זמן.</span></div>
              <div class="config-role-card" data-role="debug"><strong>דוגמת פתרון תקלות</strong><span>האתר נפל בערב; בודקים ב-Config ורואים שב-16:00 נסגר פורט 80 ב-Security Group.</span></div>
              <div class="config-role-card" data-role="compliance"><strong>ניהול תאימות</strong><span>בדיקה אוטומטית של משאבים מול Rules, למשל האם כל הדיסקים מוצפנים.</span></div>
            </div>
          `,
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">איך Config Rule עובד</h3>
            <div class="config-rule-flow">
              <div class="config-step"><strong>1. מגדירים חוק</strong><span>לדוגמה: אף Security Group לא פותח SSH בפורט 22 לכל העולם.</span></div>
              <div class="config-step"><strong>2. Config סורק</strong><span>השירות בודק את משאבי החשבון מול החוק.</span></div>
              <div class="config-step"><strong>3. הערכת Compliance</strong><span>משאב תקין מסומן Compliant; משאב מפר מסומן Non-compliant.</span></div>
              <div class="config-step"><strong>4. התרעה</strong><span>אפשר להקפיץ התראה לצוות הרלוונטי.</span></div>
              <div class="config-step"><strong>5. תיקון אוטומטי</strong><span>אם הוגדר, Config יכול להפעיל Remediation אוטומטי.</span></div>
            </div>
          `,
        },
        {
          type: "table",
          title: "שימושים נפוצים",
          headers: ["תחום", "מה Config נותן", "דוגמה"],
          rows: [
            ["ביקורת ותאימות", "ניטור עמידה במדיניות ארגונית ותקנים", "GDPR, HIPAA או דוחות ביקורת"],
            ["פתרון בעיות", "ניתוח היסטוריית שינויים בתצורת משאבים", "מי שינה Security Group ומתי"],
            ["אבטחת מידע", "זיהוי שינויים לא מורשים או חשודים", "IAM או Security Groups שנפתחו בטעות"],
          ],
        },
      ],
      quiz: [
        makeQuestion(
          "מהו AWS Config?",
          ["שירות להערכת, ביקורת וניטור תצורות משאבים", "שירות הודעות SMS", "שירות CDN", "שירות לניהול DNS בלבד"],
          0,
          "Config עוקב אחרי תצורות, שינויים ותאימות.",
        ),
        makeQuestion(
          "מה הכוונה ש-Config הוא כמו מכונת זמן?",
          ["הוא מאפשר לחזור להיסטוריית תצורה של משאבים", "הוא משנה את זמן המערכת", "הוא יוצר Backups של קבצים בלבד", "הוא מחליף את CloudTrail"],
          0,
          "Config שומר היסטוריית שינויים ומאפשר לראות מה השתנה לאורך זמן.",
        ),
        makeQuestion(
          "מה המשמעות של Non-compliant ב-Config?",
          ["המשאב עומד בחוק", "המשאב מפר חוק או מדיניות שהוגדרו", "המשאב נמחק", "המשאב הוא Topic"],
          1,
          "Non-compliant אומר שהמשאב לא עומד בכלל או במדיניות.",
        ),
        makeQuestion(
          "מהי דוגמת החוק מהמצגת?",
          ["אף Security Group לא פותח SSH 22 לכל העולם", "כל Bucket חייב להיות אדום", "כל משתמש חייב להיות root", "כל Alarm חייב למחוק EC2"],
          0,
          "השקופית מציגה כלל שמונע פתיחת פורט SSH 22 לכל העולם.",
        ),
      ],
    },
    {
      id: "security-hub",
      nav: "Security Hub",
      icon: "SH",
      title: "AWS Security Hub - מסך אחד לממצאי אבטחה",
      intro:
        "Security Hub הוא שירות מרכזי שמנהל ומאחד Security Findings מכל חשבונות AWS בארגון. המטרה היא לתת Single Pane of Glass: תמונה אחת מאוחדת של מצב האבטחה, במקום לרדוף אחרי התראות מפוזרות בין שירותים שונים.",
      blocks: [
        {
          type: "cards",
          title: "מה Security Hub עושה",
          cards: [
            {
              accent: "teal",
              title: "Aggregated Findings",
              text:
                "אוסף ומרכז ממצאי אבטחה ממקורות כמו Inspector, GuardDuty, AWS Config ושירותי צד שלישי.",
            },
            {
              accent: "blue",
              title: "Automated Compliance Checks",
              text:
                "מבצע בדיקות תאימות אוטומטיות מול תקנים כמו CIS AWS Foundations Benchmark, PCI DSS ו-ISO 27001.",
            },
            {
              accent: "purple",
              title: "Dashboards and Reports",
              text:
                "מציג מצב אבטחה בצורה ברורה ומרכזית באמצעות לוחות מחוונים ודוחות.",
            },
            {
              accent: "orange",
              title: "Incident Management",
              text:
                "משתלב עם כלי ניהול אירועים ותקלות כדי לשפר את תהליך התגובה.",
            },
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">זרימת Security Hub</h3>
            <div class="security-hub-flow">
              <div class="hub-node"><strong>Inspector</strong><span>ממצאי פגיעויות וחולשות.</span></div>
              <div class="hub-node"><strong>GuardDuty</strong><span>ממצאי איום ופעילות חשודה.</span></div>
              <div class="hub-node"><strong>AWS Config</strong><span>ממצאי תאימות ותצורה.</span></div>
              <div class="hub-node"><strong>Security Hub</strong><span>איחוד, תיעדוף וניקוי רעשי רקע.</span></div>
              <div class="hub-node"><strong>תגובה</strong><span>CloudWatch, Lambda, SNS או כלי Incident Management.</span></div>
            </div>
          `,
        },
        {
          type: "callout",
          color: "teal",
          title: "למה צריך שירות מרכזי",
          text:
            "בארגון אמיתי יש הרבה חשבונות, שירותים ומקורות התראה. Security Hub עוזר להפחית כפילויות, לתעדף ממצאים ולהבין את מצב האבטחה בלי לעבור ידנית בין כל שירות.",
        },
      ],
      quiz: [
        makeQuestion(
          "מהו Single Pane of Glass בהקשר Security Hub?",
          ["תמונה מאוחדת של מצב האבטחה במקום אחד", "דיסק EBS יחיד", "חלון בדפדפן", "שם של SNS Topic"],
          0,
          "הכוונה למסך מרכזי שמציג ממצאי אבטחה מכל המקורות.",
        ),
        makeQuestion(
          "איזה שירות יכול לשלוח ממצאים ל-Security Hub?",
          ["GuardDuty", "NAT Gateway", "EIP", "Route Table בלבד"],
          0,
          "Security Hub מרכז ממצאים משירותי אבטחה כמו GuardDuty, Inspector ו-Config.",
        ),
        makeQuestion(
          "איזה תקן מוזכר בהקשר בדיקות תאימות אוטומטיות?",
          ["CIS AWS Foundations Benchmark", "HTML5", "NTP בלבד", "IPv6 SLAAC בלבד"],
          0,
          "המצגת מזכירה CIS AWS Foundations Benchmark, PCI DSS ו-ISO 27001.",
        ),
        makeQuestion(
          "מה Security Hub עוזר להפחית?",
          ["רעשי רקע והתראות כפולות", "את הצורך בענן", "את כל כתובות ה-IP", "את מספר ה-Regions בעולם"],
          0,
          "ריכוז הממצאים עוזר להפחית כפילויות ורעש תפעולי.",
        ),
      ],
    },
    {
      id: "sns",
      nav: "SNS",
      icon: "SNS",
      title: "Amazon SNS - הפצת הודעות והתראות בזמן אמת",
      intro:
        "SNS הוא שירות Managed Service שמאפשר שליחה והפצה של הודעות והתראות באופן אמין ובזמן אמת. הוא מבוסס על מודל Pub/Sub: מפרסמים שולחים הודעה ל-Topic, ומנויים מקבלים את ההודעה לפי סוג המנוי שלהם.",
      blocks: [
        {
          type: "html",
          html: `
            <h3 class="block-title">מודל Pub/Sub של SNS</h3>
            <div class="sns-ecosystem">
              <div class="sns-card" data-kind="publisher"><strong>Publisher</strong><span>הרכיב שמייצר הודעה ושולח אותה ל-SNS, למשל CloudWatch Alarm או Security Hub.</span></div>
              <div class="sns-card" data-kind="topic"><strong>Topic</strong><span>ערוץ תקשורת מרכזי שאליו נשלחות הודעות.</span></div>
              <div class="sns-card" data-kind="subscriber"><strong>Subscribers</strong><span>מנויים שנרשמו ל-Topic ומקבלים הודעות אוטומטית.</span></div>
            </div>
          `,
        },
        {
          type: "cards",
          title: "מקורות ויעדים לפי השקופית",
          cards: [
            {
              accent: "purple",
              title: "Publishers",
              text:
                "CloudWatch Alarms, S3 כשהועלה קובץ חדש, Security Hub או מערכות ניטור אחרות.",
            },
            {
              accent: "blue",
              title: "Amazon SQS",
              text:
                "תורים לעיבוד אסינכרוני של הודעות, מתאים להפרדה בין יצרני הודעות לצרכנים.",
            },
            {
              accent: "green",
              title: "AWS Lambda",
              text:
                "הרצת קוד אוטומטי בתגובה להתראה או הודעה.",
            },
            {
              accent: "orange",
              title: "Email, SMS, HTTP/S",
              text:
                "התראות לאנשים או למערכות חיצוניות דרך מייל, הודעת SMS או Webhook.",
            },
          ],
        },
        {
          type: "diagram-flow",
          title: "דוגמת זרימת התראה",
          cols: 4,
          steps: [
            { title: "1. Alarm", text: "CloudWatch מזהה חריגה במדד.", color: "var(--orange)" },
            { title: "2. Topic", text: "ההתראה נשלחת ל-SNS Topic.", color: "var(--blue)" },
            { title: "3. Subscribers", text: "SQS, Lambda, Email או SMS מנויים ל-Topic.", color: "var(--teal)" },
            { title: "4. Action", text: "הודעה מגיעה לצוות או מפעילה קוד תגובה.", color: "var(--green)" },
          ],
        },
      ],
      quiz: [
        makeQuestion(
          "מהו Topic ב-SNS?",
          ["ערוץ תקשורת מרכזי שאליו נשלחות הודעות", "סוג של דיסק", "שם של Security Group", "חוק Config"],
          0,
          "Topic הוא המרכז שאליו Publishers שולחים הודעות וממנו Subscribers מקבלים אותן.",
        ),
        makeQuestion(
          "מי הוא Publisher במודל SNS?",
          ["הרכיב שמייצר ושולח הודעה ל-Topic", "רק משתמש root", "רק S3 Bucket ציבורי", "רק Route Table"],
          0,
          "Publisher הוא מקור ההודעה, למשל CloudWatch Alarm או Security Hub.",
        ),
        makeQuestion(
          "איזה יעד יכול להיות Subscriber?",
          ["AWS Lambda", "CIDR Block בלבד", "Availability Zone", "AMI בלבד"],
          0,
          "Lambda, SQS, Email, SMS ו-HTTP/S Webhooks יכולים לקבל הודעות.",
        ),
        makeQuestion(
          "למה SNS מתאים במערך ניטור?",
          ["להפצת התראות בזמן אמת", "לסריקת CVE", "לניהול תצורות בלבד", "לשמירת לוגים ב-S3 בלבד"],
          0,
          "SNS מפיץ הודעות והתראות במהירות למנויים.",
        ),
      ],
    },
    {
      id: "alert-journey",
      nav: "מסע התראה",
      icon: "!",
      title: "מסע התראה מסכם: חיבור כל שירותי AWS",
      intro:
        "השקופית המסכמת במצגת מציגה תרחיש אחד שמחבר את כל החומר: משתמש root פתח פורט SSH 22 לכל העולם, המערכת מזהה, מתעדת, מרכזת, מנתבת ושולחת SMS למנהל בתוך פחות מעשר שניות.",
      blocks: [
        {
          type: "html",
          html: `
            <h3 class="block-title">מסע ההתראה כתרשים HTML</h3>
            <div class="alert-journey">
              <div class="journey-step"><b>1</b><strong>האירוע</strong><span>EC2 Security Group: משתמש root פתח את פורט 22 לכל העולם.</span></div>
              <div class="journey-step"><b>2</b><strong>התיעוד</strong><span>CloudTrail ו-Config מזהים את השינוי ומסמנים חריגה או Non-compliant.</span></div>
              <div class="journey-step"><b>3</b><strong>הריכוז</strong><span>Security Hub אוסף את הממצאים ומדרג אותם כאירוע בסיכון גבוה.</span></div>
              <div class="journey-step"><b>4</b><strong>הניתוב</strong><span>EventBridge מזהה את החריגה ומנתב אותה לצינור ההפצה המתאים.</span></div>
              <div class="journey-step"><b>5</b><strong>ההתראה</strong><span>SNS שולח הודעת SMS או מייל למנהל האבטחה בזמן אמת.</span></div>
            </div>
            <div class="journey-example">דוגמה מעשית: משתמש root פתח פורט 22 (SSH) בשעה 02:00 בלילה. המערכת זיהתה, ריכזה ושלחה SMS למנהל תוך פחות מ-10 שניות.</div>
          `,
        },
        {
          type: "table",
          title: "איזה שירות עושה מה במסע",
          headers: ["שלב", "שירות", "תפקיד"],
          rows: [
            ["אירוע", "EC2 Security Group", "השינוי בפועל: פורט 22 פתוח לעולם"],
            ["תיעוד", "CloudTrail", "מי ביצע את הפעולה, מתי ומאיפה"],
            ["בדיקת מדיניות", "AWS Config", "האם השינוי עומד בחוקים, למשל No SSH from 0.0.0.0/0"],
            ["ריכוז", "Security Hub", "איחוד ותיעדוף הממצא"],
            ["ניתוב", "EventBridge", "הפעלת זרימת התראה או תגובה"],
            ["הודעה", "SNS", "שליחת SMS, מייל או Webhook"],
          ],
        },
        {
          type: "html",
          html: `
            <h3 class="block-title">מפת שקופיות מקור</h3>
            <div class="source-slide-map">
              <span>1-3: כותרת ונושאי לימוד</span>
              <span>4-8: הקדמה, חשיבות, תהליך ואתגרים</span>
              <span>9-19: CloudTrail, Event History ו-Trail</span>
              <span>20-24: Inspector</span>
              <span>25-30: GuardDuty והשוואה ל-Inspector</span>
              <span>31-35: CloudWatch</span>
              <span>36-40: AWS Config</span>
              <span>41-44: Security Hub</span>
              <span>45-47: SNS</span>
              <span>48: מסע ההתראה המסכם</span>
            </div>
          `,
        },
        {
          type: "callout",
          color: "blue",
          title: "איך לזכור את כל השיעור",
          text:
            "המסע מתחיל באירוע, ממשיך לתיעוד, עובר לבדיקת מדיניות וריכוז ממצאים, ואז מסתיים בהודעה או תגובה. זה החיבור בין Monitoring, Logging, Governance, Security Findings ו-Notifications.",
        },
      ],
      quiz: [
        makeQuestion(
          "מהו האירוע בדוגמת מסע ההתראה?",
          ["פתיחת פורט SSH 22 לכל העולם", "מחיקת כל ה-SNS Topics", "יצירת דומיין חדש", "החלפת Region"],
          0,
          "הדוגמה בשקופית היא פתיחת פורט SSH 22 לכל העולם ב-Security Group.",
        ),
        makeQuestion(
          "איזה שירות מתעד מי ביצע את הפעולה?",
          ["CloudTrail", "SNS", "SQS", "ECR"],
          0,
          "CloudTrail נותן את תיעוד הפעולה והמבצע.",
        ),
        makeQuestion(
          "איזה שירות בודק האם השינוי מפר חוק מדיניות?",
          ["AWS Config", "CloudWatch Dashboard", "Inspector בלבד", "NAT Gateway"],
          0,
          "AWS Config Rules בודקים עמידה במדיניות ומסמנים Non-compliant.",
        ),
        makeQuestion(
          "איזה שירות שולח את הודעת ה-SMS או המייל למנהל?",
          ["Security Hub", "SNS", "CloudTrail", "Inspector"],
          1,
          "SNS הוא שירות ההודעות שמפיץ התראות למנויים.",
        ),
      ],
    },
  ],
  finalExam: [
    makeQuestion(
      "מה מתאר בצורה הטובה ביותר את מטרת Week 11?",
      ["ללמוד רק על אחסון", "להבין ניטור, בקרה, לוגים והתראות ב-AWS", "להחליף את IAM", "ליצור VPC חדש"],
      1,
      "השיעור עוסק ב-Monitoring, Governance, Logging ו-Notifications.",
    ),
    makeQuestion(
      "איזה שירות מתעד קריאות API ופעולות בחשבון?",
      ["CloudTrail", "SNS", "Security Hub", "ECR"],
      0,
      "CloudTrail הוא שירות הרישום המרכזי לפעולות בחשבון AWS.",
    ),
    makeQuestion(
      "איזה שדה CloudTrail מתאר את שם הפעולה?",
      ["sourceIPAddress", "awsRegion", "eventName", "TopicArn"],
      2,
      "eventName כולל שם פעולה כמו CreateSecurityGroup.",
    ),
    makeQuestion(
      "מה תפקיד Inspector?",
      ["שליחת SMS", "ניהול DNS", "הפעלת NAT", "זיהוי פגיעויות וחולשות במשאבים"],
      3,
      "Inspector הוא שירות Vulnerability Management.",
    ),
    makeQuestion(
      "מה תפקיד GuardDuty?",
      ["ניהול תצורות", "זיהוי איומים ופעילות חשודה", "יצירת Topic", "אחסון קבצים"],
      1,
      "GuardDuty מנתח לוגים ומקורות נתונים כדי לזהות איומים.",
    ),
    makeQuestion(
      "מה ההבדל הנכון בין Inspector ל-GuardDuty?",
      ["Inspector מחפש חולשות; GuardDuty מזהה איומים", "שניהם אותו שירות", "GuardDuty שולח SMS; Inspector מנהל Topics", "Inspector הוא DNS"],
      0,
      "זו ההבחנה המרכזית למבחן.",
    ),
    makeQuestion(
      "איזה שירות מספק Metrics, Logs, Alarms ו-Dashboards?",
      ["CloudTrail", "Config", "CloudWatch", "SNS"],
      2,
      "CloudWatch מרכז ניטור ביצועים, לוגים והתראות.",
    ),
    makeQuestion(
      "איזה שירות בודק עמידה במדיניות תצורה כמו איסור פתיחת SSH לכל העולם?",
      ["SNS", "AWS Config", "Inspector", "S3"],
      1,
      "AWS Config Rules בודקים משאבים מול חוקים ומדיניות.",
    ),
    makeQuestion(
      "מה המשמעות של Non-compliant?",
      ["המשאב הוא Topic", "המשאב נמחק אוטומטית תמיד", "המשאב הוא Lambda", "המשאב מפר חוק או מדיניות"],
      3,
      "Non-compliant הוא מצב שבו משאב לא עומד בכלל שהוגדר.",
    ),
    makeQuestion(
      "מה Security Hub עושה?",
      ["מחליף את כל הלוגים", "יוצר EC2", "מרכז ממצאי אבטחה ומציג תמונה אחידה", "מנהל EIP"],
      2,
      "Security Hub מרכז Findings ממספר שירותי אבטחה וחשבונות.",
    ),
    makeQuestion(
      "איזה שירות מבוסס על Publisher, Topic ו-Subscribers?",
      ["GuardDuty", "SNS", "Config", "Inspector"],
      1,
      "SNS הוא שירות Pub/Sub.",
    ),
    makeQuestion(
      "איזה יעד יכול להיות Subscriber ב-SNS?",
      ["Lambda", "CIDR בלבד", "Availability Zone", "IAM password"],
      0,
      "Lambda, SQS, Email, SMS ו-HTTP/S יכולים להיות Subscribers.",
    ),
    makeQuestion(
      "מה Event History מאפשר ב-CloudTrail?",
      ["ליצור VPC Peering", "למחוק CVEs", "להחליף DNS", "לראות היסטוריית אירועים דרך הקונסולה"],
      3,
      "Event History מאפשר לצפות באירועים, במצגת עד 90 יום.",
    ),
    makeQuestion(
      "מהו Trail?",
      ["סוג של Security Group", "שירות הודעות", "שמירת והעברת לוגים לטווח ארוך", "מפתח הצפנה"],
      2,
      "Trail מאפשר לשמור לוגים, למשל ב-S3, ולשלוח אותם ליעדים נוספים.",
    ),
    makeQuestion(
      "מהו Data Event ב-CloudTrail?",
      ["רק Login לקונסולה", "פעולה על נתונים כמו GetObject או PutObject", "רק הודעת SMS", "רק Alarm של CPU"],
      1,
      "Data Events מתעדים פעולות על הנתונים עצמם.",
    ),
    makeQuestion(
      "איזה שירות מתאים לזיהוי פעילות חשודה מתוך VPC Flow Logs?",
      ["Inspector", "SNS", "SQS", "GuardDuty"],
      3,
      "GuardDuty משתמש בין היתר ב-VPC Flow Logs לזיהוי איומים.",
    ),
    makeQuestion(
      "איזה שירות יכול לקבל ממצאים מ-Inspector, GuardDuty ו-Config?",
      ["Security Hub", "NAT Gateway", "EBS", "Route Table"],
      0,
      "Security Hub מרכז Security Findings ממספר מקורות.",
    ),
    makeQuestion(
      "במסע ההתראה, מי שולח SMS למנהל?",
      ["CloudTrail", "Inspector", "SNS", "Config Rule"],
      2,
      "SNS מפיץ הודעות למנויים, כולל SMS או מייל.",
    ),
    makeQuestion(
      "במסע ההתראה, מי מתעד מי פתח את פורט 22?",
      ["SNS", "CloudTrail", "SQS", "CloudFront"],
      1,
      "CloudTrail מתעד את הפעולה ואת מבצע הפעולה.",
    ),
    makeQuestion(
      "איזה ניסוח מסכם נכון את כל השיעור?",
      [
        "SNS מחליף את CloudTrail ואת Config",
        "Inspector מיועד רק לשליחת מיילים",
        "GuardDuty הוא שירות אחסון ארכיוני",
        "CloudTrail מתעד, CloudWatch מודד ומתריע, Config בודק מדיניות, Security Hub מרכז, SNS מודיע",
      ],
      3,
      "זהו החיבור המרכזי בין השירותים בשבוע 11.",
    ),
  ],
};

const moveCorrectAnswerTo = (question, targetIndex) => {
  if (question.correct === targetIndex) return;
  const correctAnswer = question.a[question.correct];
  const remainingAnswers = question.a.filter((_, index) => index !== question.correct);
  remainingAnswers.splice(targetIndex, 0, correctAnswer);
  question.a = remainingAnswers;
  question.correct = targetIndex;
};

const distributeCorrectAnswers = (questions, pattern) => {
  questions.forEach((question, index) => {
    moveCorrectAnswerTo(question, pattern[index % pattern.length]);
  });
};

const sectionAnswerPatterns = [
  [1, 0, 2, 3],
  [2, 1, 3, 0],
  [3, 2, 0, 1],
  [0, 3, 1, 2],
];

window.studyGuide.sections.forEach((section, index) => {
  distributeCorrectAnswers(section.quiz, sectionAnswerPatterns[index % sectionAnswerPatterns.length]);
});

distributeCorrectAnswers(window.studyGuide.finalExam, [1, 0, 2, 3]);
