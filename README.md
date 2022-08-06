# NapicuDateFormatter

- NapicuDateFormatter is a simple date & time formatter for easy processing of date and time

# Variables for formating

<table>
   <thead>
      <tr>
         <th>Name</th>
         <th>Code</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Year</td>
         <td>%yyyy</td>
         <td>Returns the current year in number</td>
      </tr>
      <tr>
         <td>Month</td>
         <td>%MM</td>
         <td>Returns the current month in number</td>
      </tr>
      <tr>
         <td>Month name</td>
         <td>%MMN</td>
         <td>Returns the current month name - short</td>
      </tr>
      <tr>
         <td>Month name - short</td>
         <td>%MN</td>
         <td>Returns the current month name</td>
      </tr>
      <tr>
         <td>Day</td>
         <td>%dd</td>
         <td>Returns the current day in number</td>
      </tr>
      <tr>
         <td>Day name</td>
         <td>%ddn</td>
         <td>Returns the current day name</td>
      </tr>
      <tr>
         <td>Day name - short</td>
         <td>%dn</td>
         <td>Returns the current day name - short</td>
      </tr>
      <tr>
         <td>24H</td>
         <td>%HH</td>
         <td>Returns the current hour in 24H format</td>
      </tr>
      <tr>
         <td>12H</td>
         <td>%hh</td>
         <td>Returns the current hour in 12H format</td>
      </tr>
      <tr>
         <td>Minutes</td>
         <td>%mm</td>
         <td>Returns the current minutes in number</td>
      </tr>
      <tr>
         <td>Seconds</td>
         <td>%ss</td>
         <td>Returns the current seconds</td>
      </tr>
      <tr>
         <td>Meridian</td>
         <td>%a</td>
         <td>Returns the current meridian</td>
      </tr>
      <tr>
         <td>Time zone</td>
         <td>%z</td>
         <td>Returns the time zone</td>
      </tr>
   </tbody>
</table>

# Example

### Importing

```typescript
import { NapicuDate } from 'napicuformatter';
```

```javascript
const NapicuDate = require('napicuformatter');
```

### Formatting

```typescript
import { NapicuDate } from 'napicuformatter';

let i = new NapicuDate().format('%yyyy-%MM-%dd %HH:%mm:%ss');
console.log(i); // 2022-4-12 16:59:30
```

```typescript
import { NapicuDate } from 'napicuformatter';

let i = new NapicuDate().format('Time: %HH:%mm:%ss');
console.log(i); // Time: 16:59:30
```

```typescript
import { NapicuDate } from 'napicuformatter';

let i = new NapicuDate().format('Date: %MMN');
console.log(i); // Date: April
```

```typescript
import { NapicuDate } from 'napicuformatter';

let i = new NapicuDate().format('Day: %ddn');
console.log(i); // Day: Thursday
```

### Custom Date
```typescript
import { NapicuDate } from 'napicuformatter';
let i = new NapicuDate(2023, 9, 9, 23, 23, 23, 1000).format('%yyyy-%MM-%dd %HH:%mm:%ss');
console.log(i); //2023-9-9 23:23:24
```

```typescript
import { NapicuDate } from 'napicuformatter';
let i = new NapicuDate(1547778643657).format('%yyyy-%MM-%dd %HH:%mm:%ss');
console.log(i); //2019-1-18 03:30:43
```

```typescript
import { NapicuDate } from 'napicuformatter';
let i = new NapicuDate(2016, 6, 6).format('%yyyy-%MM-%dd %HH:%mm:%ss');
console.log(i); //2019-1-18 03:30:43
```


### Getting

```typescript
import { NapicuDate } from 'napicuformatter';

let i = new NapicuDate();

i.getLanguageDays(); // Returns the days of the week in the config language
i.getLanguageShortsDays(); // Returns shortened days of the week in the config language
i.getLanguageMonths(); // Returns  he months of the year in the config language
i.getLanguageShortsMonths(); // Returns shortened months of the year in the config language
i.getCurrentDay(); // Returns the current day
i.getCurrentMonth(); // Returns the current month
i.getCurrentYear(); // Returns the current year
i.getCurrentSeconds(); // Returns the current seconds
i.getCurrentMinutes(); // Returns the current minutes
i.getCurrentHours(); // Returns the current hours
i.getCurrentDayName(); // Returns the current day name in the config language
i.getCurrentMonthName(); // Returns the current month name in the config language
i.getTimeStamp(); //Returns the time value in milliseconds
```

### Static methods

```typescript
import { NapicuDate } from 'napicuformatter';

NapicuDate.getLanguageDays(); // Returns the days of the week in the config language
NapicuDate.getLanguageMonths(); // Returns  he months of the year in the config language
NapicuDate.getLanguageShortsDays(); // Returns shortened days of the week in the config language
NapicuDate.getLanguageShortsMonths(); // Returns shortened months of the year in the config language
```

### Use with config

```typescript
import { NapicuDate } from 'napicuformatter';

NapicuDate.use({
  shortNameLength: 2,
});

let i = NapicuDate.getLanguageShortsDays();
console.log(i);
//[
//  'Mo', 'Tu',
//  'We', 'Th',
//  'Fr', 'Sa',
//  'Su'
//]
```

### Configuration

```typescript
import { NapicuDate } from 'napicuformatter';

NapicuDate.use({
  days: [
    'Monday', // 1
    'Tuesday', // 2
    'Wednesday', // 3
    'Thursday', // 4
    'Friday', // 5
    'Saturday', // 6
    'Sunday', // 7
  ],

  months: [
    'January', // 1
    'February', // 2
    'March', // 3
    'April', // 4
    'May', // 5
    'June', // 6
    'July', // 7
    'August', // 8
    'September', // 9
    'October', // 10
    'November', // 11
    'December', // 12
  ],
  shortNameLength: 3, // Short name length - default 3
});
```
