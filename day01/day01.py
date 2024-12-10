arr1 = []
arr2 = []
differenceArr = []

filename = {filePath} #sanitizing filepath for github upload

with open(filename, mode="r") as file_object:
    data = []
    file_contents = file_object.read().split('\n')

    for numPair in file_contents:
        data.append(numPair.split('   '))

for numPair in data:
    arr1.append(numPair[0])
    arr2.append(numPair[1])

arr1.sort()
arr2.sort()

for i in range(0, len(arr1)):
    if int(arr1[i]) >= int(arr2[i]):
        differenceArr.append(int(arr1[i]) - int(arr2[i]))
    else:
        differenceArr.append(int(arr2[i]) - int(arr1[i]))

# print(differenceArr)
print('SUM: ', sum(differenceArr))