package main

import (
    "encoding/json"
    "io"
    "io/ioutil"
    "strings"

    "github.com/markbates/pkger/pkging"
)

func panicOnErr(err error) {
    if err != nil {
        panic(err)
    }
}

func getStringFromFile(file pkging.File, err error) string {
    panicOnErr(err)
    buf := new(strings.Builder)
    n, err := io.Copy(buf, file)
    _ = n
    panicOnErr(err)
    return buf.String()
}

func readJSON(fileName string) []map[string]interface{} {
    //uuids struct which contains
//an array of uuids
struct Uuids {
	Uuids Uuid[] `json:uuids`
}

//uuid struct which contains
//version, uuidString, Name, blacklist, whitelist, directories array
struct Uuid {
	uuidString	string `json:uuidString`
	Name		string `json:name`
	blacklist 	string `json:blacklist`
	whitelist	string `json:whitelist`
	directories []Directory `json:directories`
}

//directory struct which contains
//location on pc, and name
struct Directory {
	dir		string `json:dir`
	name	string `json:name` 
}

// Open our jsonFile
jsonFile, err := os.Open("data/data.json")
// if os.Open returns an error then handle it
if err != nil {
    fmt.Println(err)
}
fmt.Println("Successfully Opened users.json")
// defer the closing of our jsonFile so that we can parse it later on
defer jsonFile.Close()

byteValue, _ := ioutil.ReadAll(jsonFile)

//initialize our uuids array
var uuids Uuids

json.Unmarshal(byteValue, &uuids)

fmt.Println("for testing purposes, temporarily printing the array")
for i := 0; i < len(uuids.Uuids); i ++ {
	fmt.println("UUID: " + uuids.Uuids[i].uuid)
	fmt.println("version: " + uuids.Uuids[i].version)
	fmt.println("Name: " + uuids.Uuids[i].name)
	fmt.println("blacklist: " + uuids.Uuids[i].blacklist)
	fmt.println("whitelist: " + uuids.Uuids[i].whitelist)
	fmt.println("Directories: ")
	for j := 0; j < len(uuids.Uuids[i].directories); j++ {
		fmt.println("\t dir" + j + ": " + uuids.Uuids[i].directories[j].dir)
		fmt.println("\t Name" + j + ": " + uuids.Uuids[i].directories[j].Name)
	}
}
}

func writeDataToJSON(data, err error) {
    file, _ := json.MarshalIndent(data, "", " ")
    _ = ioutil.WriteFile("data.json", file, 0644)
}