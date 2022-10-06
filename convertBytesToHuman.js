/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if ((typeof bytes == 'number') && (bytes > 0)) {
    const size_list = [' B', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB'];
    let index = Math.floor(Math.log(bytes) / Math.log(1024))
    let result = (bytes / Math.pow(1024, index)).toFixed(2)
    if(result == Math.trunc(result)){
      return Math.trunc(result) + size_list[index]
    }
    return result  + size_list[index]
  }
  else if ((typeof bytes == 'number') && (bytes == 0)){
    return '0 B'
  }
  else{
      return false
  }
}
