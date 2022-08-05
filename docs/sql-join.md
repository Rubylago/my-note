---
title: "[SQL] JOIN Types"
---

# [SQL] JOIN Types

SQL join其實滿好懂的，下面有圖說，這邊紀錄最常用的幾種JOIN。(我覺得[stackoverflow](https://stackoverflow.com/questions/30358982/sql-server-replaces-left-join-for-left-outer-join-in-view-query)上解釋的英文寫得比中文好懂)

![SQL JOIN](https://i.stack.imgur.com/ObDyr.png)

## 基本語法

>SQL JOIN 系列用來比較兩張表，可以搭配上面的圖解一起看。

用 FROM 跟 JOIN 把兩個資料表關聯起來，使用 ON 後面的條件說明是用什麼關係來關聯 :

```SQL
SELECT 要顯示的資料欄位 
FROM 主要表單
JOIN 被關聯表單 
ON 兩者關連的條件
```

## (INNER) JOIN

![JOIN](https://www.w3schools.com/sql/img_innerjoin.gif)  
>INNER JOIN aka JOIN 兩個都可以，意思一樣，下面的OUTER JOIN也是

only where both tables match.  
只列出兩張表有交集的資料列

```SQL
SELECT table_column1, table_column2...
FROM table_name1
INNER JOIN table_name2 
ON table_name1.column_name=table_name2.column_name;
```

## LEFT (OUTER) JOIN

![LEFT JOIN](https://www.w3schools.com/sql/img_leftjoin.gif)  
Returns all records from the left table, and the matched records from the right table.  
返回左表中的所有資料列，以及右表中能夠匹配的列，有空值會顯示NULL

```SQL
SELECT table_column1, table_column2...
FROM table_name1
LEFT JOIN table_name2 
ON table_name1.column_name=table_name2.column_name;
```

## RIGHT (OUTER) JOIN

![RIGHT JOIN](https://www.w3schools.com/sql/img_rightjoin.gif)  
Returns all records from the right table, and the matched records from the left table.  
返回右表中的所有資料列，以及左表中能夠匹配的列，有空值會顯示NULL

```SQL
SELECT table_column1, table_column2···
FROM table_name1
RIGHT JOIN table_name2 
ON table_name1.column_name=table_name2.column_name;
```

## 小結

基本上主要表單就是會被**全表遍歷一輪**的表單，依據想要關聯的條件，在主要表單的後面接上被關聯表單的內容，就算被關聯表單沒有符合也會以NULL的方式顯示。  

以LEFT JOIN舉例，拆開來步驟就像是:

1. 從 A 表看第一行內容中的 a 欄位內容
2. 從 B 表找到滿足關聯條件的行
3. 把 B 表中滿足條件的行跟 A 表 a 欄位合成同一行，如果 B 表中沒有滿足條件的行，就填NULL
4. 繼續看 A 表第二行，重複一直到 A 表都看完  

因為 A 表每一行都會被掃過一次，所以通常會選比較小的那個表單來當主要表單~~畢竟要被輪一遍~~，從小一點的開始比較快。  

---

### 參考資料 與 延伸閱讀

* [w3schools](https://www.w3schools.com/sql/sql_join.asp)
* [SQL Server replaces LEFT JOIN for LEFT OUTER JOIN in view query](https://stackoverflow.com/questions/30358982/sql-server-replaces-left-join-for-left-outer-join-in-view-query)
* [JOIN 連接 (SQL JOIN)](https://www.fooish.com/sql/join.html)
