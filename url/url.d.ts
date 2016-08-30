// Type definitions for url v0.11.0
// Project: https://github.com/defunctzombie/node-url
// Definitions by: Alexander Grimalovsky <https://github.com/FlyingDR>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Parsed URL object to use in Url.format()
 */
interface UrlObj {
    /**
     *  treated the same with or without the trailing : (colon).
     */
    protocol?: string;
    /**
     * will be used if present
     */
    auth?: string;
    /**
     * will only be used if host is absent
     */
    hostname?: string;
    /**
     * will only be used if host is absent
     */
    port?: string|number;
    /**
     * will be used in place of hostname and port
     */
    host?: string;
    /**
     * is treated the same with or without the leading / (slash)
     */
    pathname?: string;
    /**
     * will be used in place of query
     * treated the same with or without the leading ? (question mark)
     */
    search?: string;
    /**
     * will only be used if search is absent
     */
    query?: Object;
    /**
     * treated the same with or without the leading # (pound sign, anchor)
     */
    hash?: string;
}

/**
 * Parsed URL object
 */
interface ParsedUrl extends UrlObj {
    /**
     * The request protocol, lowercased.
     * @example http:
     */
    protocol: string;
    slashes: boolean;
    /**
     * The authentication information portion of a URL.
     * @example user:pass
     */
    auth: string;
    /**
     * The full lowercased host portion of the URL, including port information
     * @example host.com:8080
     */
    host: string;
    /**
     * The port number portion of the host
     * @example 8080
     */
    port: string|number;
    /**
     * Just the lowercased hostname portion of the host
     * @example host.com
     */
    hostname: string;
    /**
     * The 'fragment' portion of the URL including the pound-sign
     * @example #hash
     */
    hash: string;
    /**
     * The 'query string' portion of the URL, including the leading question mark
     * @example ?query=string
     */
    search: string;
    /**
     * Either the 'params' portion of the query string, or a querystring-parsed object
     * @example 'query=string' or {'query':'string'}
     */
    query: string|Object;
    /**
     * The path section of the URL, that comes after the host and before the query, including the initial slash if present
     * @example /p/a/t/h
     */
    pathname: string;
    /**
     * Concatenation of pathname and search
     * @example /p/a/t/h?query=string
     */
    path: string;
    /**
     * The full URL that was originally parsed. Both the protocol and host are lowercased
     * @example http://user:pass@host.com:8080/p/a/t/h?query=string#hash
     */
    href: string;
}

/**
 * URL manipulation object
 */
export class Url implements ParsedUrl {
    protocol: string;
    slashes: boolean;
    auth: string;
    host: string;
    port: string|number;
    hostname: string;
    hash: string;
    search: string;
    query: string|Object;
    pathname: string;
    path: string;
    href: string;

    /**
     * Take a URL string, and return an object
     *
     * @param url                   URL to parse
     * @param parseQueryString      Set to true to also parse the query string using the querystring module
     * @param slashesDenoteHost     Set to true to treat //foo/bar as { host: 'foo', pathname: '/bar' } rather than { pathname: '//foo/bar' }
     */
    parse(url: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): ParsedUrl;

    /**
     * Take a parsed URL object, and return a formatted URL string
     *
     * @param url
     */
    format(url?: UrlObj): string;

    /**
     * Resolve href URL against this URL as a browser would for an anchor tag
     *
     * @param to
     */
    resolve(to: string): string;

    /**
     * Resolve href URL against this URL, and resolve them as a browser would for an anchor tag
     *
     * @param to
     */
    resolveObject(to: UrlObj|string): ParsedUrl;
}

/**
 * Take a URL string, and return an object
 *
 * @param url                   URL to parse
 * @param parseQueryString      Set to true to also parse the query string using the querystring module
 * @param slashesDenoteHost     Set to true to treat //foo/bar as { host: 'foo', pathname: '/bar' } rather than { pathname: '//foo/bar' }
 */
export function parse(url: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): ParsedUrl;

/**
 * Take a parsed URL object, and return a formatted URL string
 *
 * @param url
 */
export function format(url: UrlObj): string;

/**
 * Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag
 *
 * @param from
 * @param to
 */
export function resolve(from: string, to: string): string;

/**
 * Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag
 *
 * @param from
 * @param to
 */
export function resolveObject(from: ParsedUrl, to: UrlObj|string): ParsedUrl;
