<?php
class Person
{
  private $name;
  private $lastname;
  private $age;
  private $hp;
  private $mother;
  private $father;

  function __construct($name, $lastname, $age, $mother=null, $father=null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->age = $age;
    $this->mother = $mother;
    $this->father = $father;
    $this->hp = 100;
  }
  function sayHi($name)
  {
    return "Hi, $name, I`m " . $this->name;
  }
  function setHp($hp) {
    if ($this->hp + $hp >= 100) $this->hp = 100;
    else $this->hp = $this->hp + $hp;
  }
  function getHp() {
    return $this->hp;
  }
  function getName() {
    return $this->name;
  }
  function getMother() {
    return $this->mother;
  }
  function getFather() {
    return $this->father;
  }
  function getLastname() {
    return $this->lastname;
  }
  function getInfo() {
    return "
    <h3>A few words about myself:</h3><br>"."My name is: ".$this->getName()."<br>my lastname is: ".$this->getLastname()."<br>my father is: ".$this->getFather()->getName()."<br>my mother is: ".$this->getMother()->getName()."<br>my grandmother on my mother's side is: ".$this->getMother()->getMother()->getName()."<br>my grandfather on my mother's side is ".$this->getMother()->getFather()->getName()."<br>my grandmother on my father's side is: ".$this->getFather()->getMother()->getName()."<br>my grandfather on my father's side is ".$this->getFather()->getFather()->getName();

  }
}
$regina = new Person("Regina", "Rozina", 59);
$sergei = new Person("Sergei", "Rozin", 62);
$sveta = new Person("Sveta", "Skakovskaya", 55);
$leonid = new Person("Leonid", "Skakovskiy", 58);

$vova = new Person("Vova", "Rozin", 30, $regina, $sergei);
$masha = new Person("Masha", "Skakovskaya", 30, $sveta, $leonid);
$sasha = new Person("Sasha", "Rozina", 4, $masha, $vova);

echo $sasha->getInfo();
