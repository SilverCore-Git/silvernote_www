export default function
(a: {
    utm_medium: string, 
    utm_source?: string, 
    type: "href" | "open" 
}): string | void
{
    const baseUrl = 'https://app.silvernote.fr';
    const url = new URL(baseUrl);
    url.searchParams.append('utm_medium', a.utm_medium || 'unknow');
    url.searchParams.append('utm_source', a.utm_source || 'silvernote_www');
    
    if (a.type === 'href') {
        return url.toString();
    }
    else if (a.type === 'open') {
        window.open(url.toString(), '_blank');
    }
}