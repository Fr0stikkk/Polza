
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
//интерфейс
public interface InterfaceCalc
{
    //а - первый аргумент, b - второй
    void Put_A(double a); //сохранить а
 
    void Clear_A();
 
    double Multiplication(double b);
 
    double Division(double b);
 
    double Sum(double b);
 
    double Subtraction(double b); //вычитание
 
    double SqrtX(double b);
 
    double DegreeY(double b);
 
    double Sqrt();
 
    double Square();
 
    double Factorial();
 
    double MemoryShow(); //показать содержимое регистра памяти
 
    void Memory_Clear(); //стереть содержимое регистра памяти
 
    //* / + - к регистру памяти
    void M_Multiplication(double b);
 
    void M_Division(double b);
 
    void M_Sum(double b);
 
    void M_Subtraction(double b); //вычитание
}
