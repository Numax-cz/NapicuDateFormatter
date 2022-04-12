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
         <td>Minutes</td>
         <td>%mm</td>
         <td>Returns the current minutes</td>
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


#Example
### Formatting
```typescript
let i = new NapicuDate().format("%yyyy%-%MM-%dd %HH:%mm:%ss");
console.log(i) // 2022-4-12 16:59:30
```

```typescript
let i = new NapicuDate().format("Time: %HH:%mm:%ss");
console.log(i) // Time: 16:59:30
```

```typescript
let i = new NapicuDate().format("Date: %MMN");
console.log(i) // Date: April
```

```typescript
let i = new NapicuDate().format("Day: %ddn");
console.log(i) // Day: 16:59:30
```

[//]: # (### Getting)

[//]: # (```typescript)

[//]: # (let i = new NapicuDate&#40;&#41;;)

[//]: # (i.getCurrentDayName&#40;&#41;;)

[//]: # (i.getCurrentDayNameShort&#40;&#41;;)

[//]: # (i.)

[//]: # (```)
