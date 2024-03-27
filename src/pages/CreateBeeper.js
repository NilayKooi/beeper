import React from 'react'
import HeaderMenu from '../components/HeaderMenu.js';

const default_text = `*סטטוס תקלות - צהריים:*

*🟠ניטור שווא בבדיקת CIMC נצבעת לסירוגין בערך False בשירות DNA:*
*מזהה:* INC0118598
לאחר בדיקה של צוות הנדסת רשת נראה כי הרכיב לא נופל ומדובר בניטור שווא.
צוות Devnet מצאו כי שרת ה-SRM מתריע על כך שהרכיב למטה כאשר הוא לא מה שיוצר את הניטור שווא.
המשך טיפול של צוות Devnet.

*🟠 עיוורון ניטורי במספר בדיקות Memory Usage בשירות OenAman IT Kirya:*
*מזהה:* INC0120573
בטיפול של צוות Trix.

*🟠 עיוורון ניטורי במספר בדיקות Memory Usage בשירות UC Sapir:*
*מזהה:* INC0120566
בטיפול צוות Trix.

*🟢 טחינת קו באתר מפקדה G1 - RT Shual:*
*מזהה:* INC0120453
לאחר זמן מה הטחינה ירדה מעצמה.

*🟢 נפילה של Elastic Data Node אחד בשירות Isengard:*
*מזהה:* INC0120494
לאחר בירור של צוות Trix נראה שה- Node לא הצליח למשוך Image בצורה אוטומטית מה- Harbor.
צוות Trix ביצעו את המשיכה בצורה ידנית וחזרה תקינות. 

*🟢 אתר שבעת הכוכבים למטה:*
*מזהה:* INC0120436
לאחר בירור מול 9272 נמצא כי בוצעה הקמת OTDR בין שבעת הכוכבים לקריה. במהלך הפעילות נותקו 2 הרגליים באתר במקום רגל-רגל בטעות אנוש.
הצוות ביצעו חזרה לאחור וחזרה תקינות.

*🟢 לא ניתן לגשת למערכת Service now:*
*מזהה:* INC0120402
לאחר בירור מול צוות Horizon, נראה כי במהלך פעילות "העלאת גרסה למערכת Service now" בוצע ריסוט ל-Service על אחד משרתי האפליקציה האחראי להריץ את המערכת. במהלך השדרוג של אותו שרת, שרת האפליקציה השני הפנה משתמשים לגרסה החדשה של המערכת שעוד לא הייתה קיימת על השרת ולכן חלק מהמשתמשים לא הצליחו לגשת למערכת. 
צוות Horizon חסמו את פניית המשתמשים דרך ה-AVI שתיהיה לשרת הראשון בלבד שכבר עבר את השדרוג וחזרה תקינות משתמשים.

*🟢 נפילת קו WAN בנתיבי שייט G4 - U4:*
*מזהה:* INC0120353
לאחר בירור נראה כי חזרה תקינות מעצמה.

*🟢 ניטור שווא בבדיקת External Domain ברשת OA בשירות Active directory:*
*מזהה:* INC0120222
דרך פתרון בבירור.

*🟢 בדיקת Airflow Worker נצבעת לסירוגין בשירות Isengard:*
*מזהה:* INC0119595
בעקבות נפילה של Harbour K8S Trix נראה כי הפרוייקט של ה-Airflow שובש.
צוות Trix הורידו את ה-Pod וכשהוא עלה מחדש חזרה תקינות.

*🟢 מערכת חדר מלחמה למטה לסירוגין:*
*מזהה:* INC0119789
לפי צוות Drive לפעמים הפודים קורסים בעקבות עומס. צוות Drive כתבו Script חדש שלא יוצר עומס.
הצוות הטמיעו את הScript וחזרה תקינות למערכת.

*פעילויות ושינויים:*
⬅️הפצת סידור הרשאות WOL עם התראה בתלם - החלה.
⬅️העלאת גרסה ה- Service Now - החלה.
⬅️הוספת יכולת חדרים אישיים למשתמשי OA במערכת Cisco Jabber - החלה.
⚪הפצת Bitlocker ב-5410 - עוד לא החלה.
✅העלאת גרסה למערכת חצר אמ"ן - הסתיימה.
`

function CreateBeeper() {
  return (
    <div>
      <HeaderMenu/>
      <div className='CreatePage'>
        <div className='neumorphism message_sections'>
          <p className='header_text'>עריכת ההודעה</p>
        </div>
        <div className='neumorphism message_sections'>
          <p className='header_text'>פלט ההודעה</p>
          <textarea id='message_output' className='neumorphism message_output' defaultValue={default_text}>

          </textarea>
        </div>
      </div>
    </div>
  )
}

export default CreateBeeper
