const getTableList = (markdownContent: string) => {
  const lineByMarkdown = markdownContent.split('\n');
  let isCodeLine = false;
  const tableList = new Array();
  
  lineByMarkdown.forEach((line) => {
    if (/^```/.test(line)) {
      isCodeLine != isCodeLine
    }

    if (!isCodeLine) {
      const isUndefined = getSidebarValue(line);
      if (isUndefined !== undefined) {
        tableList.push(getSidebarValue(line));
      }
    }
  });

  return tableList;
}

const getSidebarValue = (line: string) => {
  if (/^###/.test(line)) {
    return {
      depth: 3,
      name: line.replace('###', '').trim()
    }
  } else if (/^##/.test(line)) {
    return {
      depth: 2,
      name: line.replace('##', '').trim()
    }
  } else if (/^#/.test(line)) {
    return {
      depth: 1,
      name: line.replace('#', '').trim()
    }
  }
}

export default getTableList;