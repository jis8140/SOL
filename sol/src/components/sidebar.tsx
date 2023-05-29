import getTableList from '@/api/headMarkdown';

const depthSidebar = (target: any) => {
  if (target.depth == 1) {
    return ( 
      <li key={target.name}>
        <a className="text-base hover:text-gray-900" href={`#${target.name}`}>{target.name}</a>
      </li>
    );
  } else if (target.depth == 2) {
    return ( 
      <li className='px-3' key={target.name}>
        <a className="text-sm hover:text-gray-900" href={`#${target.name}`}>{target.name}</a>
      </li>
    );
  }
  
  return (
    <li className='px-5' key={target.name}>
      <a className="text-xs hover:text-gray-900" href={`#${target.name}`}>{target.name}</a>
    </li>
  );
}

const SidebarTOC = (props: any) => {
  const sidebarValue = getTableList(props.content);
  const sidebar = sidebarValue.map(target => depthSidebar(target));
  
  return (
    <aside className='TOC'>
      <ul>
        {sidebar}
      </ul>
    </aside>
  );
}

export default SidebarTOC;